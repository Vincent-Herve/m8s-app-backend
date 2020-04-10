// Dotenv
const dotenv = require('dotenv');
dotenv.config();

// BodyParser
const bodyParser = require('body-parser');

// Express Session
const session = require('express-session');

// Express
const express = require('express');
const app = express();

app.use(session({
  saveUninitialized: true,
  resave: false,
  secret: "keyboard cat",
  cookie: {}
}));

app.use(bodyParser.json());

// Rend disponibles les données envoyées par l'utilisateur, via req.body
app.use(express.urlencoded({
  extended: true
})); 

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  next();
});

// Router
const router = require('./app/router');

// Cors
const cors = require('cors');

const PORT = process.env.PORT || 3000;

// Utilisation du router
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});