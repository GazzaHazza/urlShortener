import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import { UrlEntry } from './urlEntry';
import { createFullUrl, isValidUrl } from './url-utils';
import { getShortCode, isDuplicate, insertNew } from './mongo-utils';

mongoose.Promise = global.Promise;

export const app = express();
mongoose.connect('mongodb://admin:Hellotouall1234@ds115493.mlab.com:15493/url_shortener', {useMongoClient: true});
app.use(bodyParser.json());
app.use(express.static(path.join(path.dirname(__dirname), 'client/build')));

app.get('/api/:shortCode', (req, res) => {
  let shortCode = parseInt(req.params.shortCode);
  if (isNaN(shortCode)) {
    res.status(200).json({ message: 'Invalid URL shortCode. It must be a number.' })
  } else {
    UrlEntry.findOne({ shortCode }).then(doc => {
      if (!doc) {
        res.status(404).json({ message: 'No URL is in the database with this short code' });
      } else {
        res.status(200).json({originalUrl:doc.original});
      }
    });
  }
});

app.post('/api/new/', (req, res) => {
  let url = req.body.url;
  if (isValidUrl(url)) {
    isDuplicate(url).then(exists => {
      if (exists.foundOne) {
        res.status(500).json({ message: 'URL already exists in the database.', shortCode: createFullUrl(req, exists.shortCode), originalUrl: url });
      } else {
        insertNew(url).then(inserted => {
          res.status(200).json({ message: 'Short URL succesffuly shortened, here it is -', shortUrl: createFullUrl(req, inserted.shortCode), originalUrl: url });
        });
      }
    });
  } else {
    res.status(500).json({ message: 'Invalid URL format. Input URL must comply to the following: http(s)://(www.)domain.ext(/)(path)'});
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
