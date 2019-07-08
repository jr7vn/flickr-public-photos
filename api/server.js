// This will be our application entry. We'll setup our server here.
const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request-promise');
const NODE_ENV = process.env.NODE_ENV || 'development';

// Set up the express app
const app = express();

// enable cors
app.use(cors());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if(NODE_ENV === 'production') {
// Serve static files
  app.use(express.static(`${__dirname}/../build`));
}

app.get('/api/flickr/search', async (req, res) => {
  try {
    const options = {
      uri: 'https://www.flickr.com/services/feeds/photos_public.gne',
      qs: {
        tags: req.query.tags || '',
        format: 'json',
        nojsoncallback: 1
      },
      json: true
    };
    const data = await request(options);
    return res.json(data);
  } catch (e) {
    return res.status(500).json(e);
  }
});

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => {
  if(NODE_ENV === 'production') {
   return res.sendFile(`${__dirname}/../build/index.html`)
  }
  return res.json({
    msg: 'Development environment'
  })
});

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
console.log(`Server listening at port ${port}`);

module.exports = app;
