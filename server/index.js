require('babel-register');

const app = require('./app').app,
      PORT = process.env.PORT || 8000;
app.listen(PORT, function() {
	console.log('URL shortener microservice listening on port', PORT);
});