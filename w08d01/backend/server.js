const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const movies = require('./data/movies');
const cast = require('./data/cast');

const app = express();
const port = 7001;

// middleware
app.use(morgan('dev'));
// app.use(cors()); // anyone can make requests to this server

// GET /movies
app.get('/movies', (req, res) => {
  const movieArr = Object.values(movies);
  res.json(movieArr);
});

// GET /cast
app.get('/cast', (req, res) => {
  const castArr = Object.values(cast);
  res.json(castArr);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
