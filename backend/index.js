// Dotenv
const dotenv = require('dotenv');
dotenv.config();

// Cors
const cors = require('cors');

const corsOption = {
  origin: ['http://localhost:3000', 'http://localhost:8080'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['Origin, X-Requested-With, Content-Type, Accept']
};

// Passport
const passport = require('passport');

// Store user information into session
passport.serializeUser(function(user, done) {
  return done(null, user);
});
  
// Get user information out of session
passport.deserializeUser(function(id, done) {
  return done(null, id);
});

// BodyParser
const bodyParser = require('body-parser');

// Express Session
const session = require('express-session');

// Express
const express = require('express');
const app = express();

// Ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(cors(corsOption));

app.use(session({
  saveUninitialized: true,
  resave: false,
  secret: "keyboard cat",
  cookie: {}
}));

app.use(bodyParser.json());

app.use(express.urlencoded({
  extended: true
}));

app.use(passport.initialize()); 
app.use(passport.session());

// Router
const router = require('./app/router');

const PORT = process.env.PORT || 3000;

// Utilisation du router
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

module.exports = app;