require('babel-register');

const app = require('./server/app').app,
      PORT = 8000;
app.listen(PORT, function() {
	console.log('URL shortener microservice listening on port', PORT);
});