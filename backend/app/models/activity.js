// Modèle activity

// Import
const Sequelize = require('sequelize');
const { DataTypes } = require("sequelize");
const db = require('../db');

// Sequelize <> activity
class Activity extends Sequelize.Model {
};

// Init
Activity.init({
  title: Sequelize.TEXT,
  description: Sequelize.TEXT,
  free_place: Sequelize.INTEGER,
  location: Sequelize.TEXT,
  date: Sequelize.DATEONLY,
  hour: Sequelize.TIME
}, {
  sequelize: db,
  tableName: "activity",
  createdAt: "created_at",
  updatedAt: "updated_at",
  underscored: true
});

// Export
module.exports = Activity;