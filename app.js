// Dotenv
const dotenv = require('dotenv');
dotenv.config();

// Express
const express = require('express');
const app = express();

// Helmet
const helmet = require('helmet');

// Cors
const cors = require('cors');

const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['Origin, X-Requested-With, Content-Type, Accept']
};

// Routes
const activityRoutes = require('./routes/activity');
const tagRoutes = require('./routes/tag');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

// BodyParser
const bodyParser = require('body-parser');

app.use(helmet());
app.use(cors(corsOption));
// app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}));

// router des activités
app.use('/activity', activityRoutes);
// router des tags
app.use('/tag', tagRoutes);
// router des utilisateurs
app.use('/user', userRoutes);
// routeur d'authentification
app.use('/auth', authRoutes);

module.exports = app;