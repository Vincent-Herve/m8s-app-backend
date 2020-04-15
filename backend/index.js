// Dotenv
const dotenv = require('dotenv');
dotenv.config();

// Passport Local

const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

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

app.use(passport.initialize()); 
app.use(passport.session());

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
  next();
});

/*
passport.use(new LocalStrategy (
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
*/

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