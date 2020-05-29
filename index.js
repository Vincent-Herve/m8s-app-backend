const fs = require('fs');
const http = require('http');
const https = require('https');

const options = {
  key: fs.readFileSync('sslcert/server.key'),
  cert: fs.readFileSync('sslcert/server.cert')
};


// Dotenv
const dotenv = require('dotenv');
dotenv.config();

// Cors
const cors = require('cors');

// Helmet
const helmet = require('helmet');

const corsOption = {
  origin: true,
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

app.use(helmet());
app.use(express.static('dist'));
app.use(cors(corsOption));

const PostgreSqlStore = require('connect-pg-simple')(session);
var expiryDate = new Date( Date.now() + 60 * 60 * 1000 );

app.use(session({
  store: new PostgreSqlStore({
    conString: process.env.PG_URL,
    ttl: 3600
  }),
  saveUninitialized: true,
  resave: true,
  secret: process.env.SECRET_SESSION
}));

app.use(bodyParser.json());

app.use(express.urlencoded({
  extended: true
}));

app.use(passport.initialize()); 
app.use(passport.session());

// Router
const router = require('./app/router');

const PORT = process.env.PORT || 443;

// Utilisation du router
app.use(router);

https.createServer(options, app).listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});


module.exports = app;