// Modèle Tag

// Import
const Sequelize = require('sequelize');
const db = require('../db');

// Sequelize <> tag
class Tag extends Sequelize.Model {
};

// Init
Tag.init({
  name: Sequelize.TEXT
}, {
  sequelize: db,
  tableName: "tag",
  createdAt: "created_at",
  updatedAt: "updated_at"
});

// Export
module.exports = Tag;