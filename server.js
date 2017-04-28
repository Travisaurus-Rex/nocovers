// Get dependencies
const express     = require('express');
const path        = require('path');
const http        = require('http');
const bodyParser  = require('body-parser');
const amazon      = require('amazon-product-api');

// Create express app
const app = express();

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(forceSSL);

// Amazon client keys
const client  = amazon.createClient({
	awsId: 'AKIAJ473N66QHXJX5CYA',
	awsSecret: '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'
});

// Get our API routes
const routes = require('./server/routes/routes');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our API routes
app.use('/api', routes);

// Catch all other routes and return index file
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get Port from environment and store in express
const port = process.env.PORT || 8080;
app.set('port', port);

// launch the server
app.listen(port, () => console.log(`API running on port: ${port}`));