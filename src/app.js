import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

import { UrlEntry } from './urlEntry';
import { createFullUrl, isValidUrl } from './url-utils';
import { getShortCode, isDuplicate, insertNew } from './mongo-utils';

mongoose.Promise = global.Promise;

export const app = express();
mongoose.connect('mongodb://admin:Hellotouall1234@ds115493.mlab.com:15493/url_shortener', {useMongoClient: true});

app.get('/api/:shortCode', (req, res) => {
  let shortCode = parseInt(req.params.shortCode);
  if (isNaN(shortCode)) {
    res.status(200).json({ error: 'Invalid URL shortCode. It must be a number.' })
  } else {
    UrlEntry.findOne({ shortCode }).then(doc => {
      if (!doc) {
        res.status(404).json({ error: 'Page not found' });
      } else {
        res.redirect(doc.original);
      }
    });
  }
});

app.get('/api/new/*', (req, res) => {
  let url = req.params[0];
  if (isValidUrl(url)) {
    isDuplicate(url).then(exists => {
      if (exists.foundOne) {
        res.status(500).json({ error: 'URL already exists in the database.', shortCode: exists.shortCode });
      } else {
        insertNew(url).then(inserted => {
          res.status(200).json({ message: 'Url successfully shortened', url: createFullUrl(req, inserted.shortCode) });
        });
      }
    });
  } else {
    res.status(500).json({ error: 'Invalid URL format. Input URL must comply to the following: http(s)://(www.)domain.ext(/)(path)'});
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
