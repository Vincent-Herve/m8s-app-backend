// Modèle User

// Import
const Sequelize = require('sequelize');
const db = require('../db');

// Sequelize <> user
class User extends Sequelize.Model {
  getPassword() {
    return this.password;
  };
};

// Init
User.init({
  username: Sequelize.TEXT,
  firstname: Sequelize.TEXT,
  lastname: Sequelize.TEXT,
  avatar_url: Sequelize.TEXT,
  email: Sequelize.TEXT,
  password: Sequelize.TEXT,
  isVerified: Sequelize.BOOLEAN,
  resetPasswordToken: Sequelize.TEXT,
  resetPasswordExpires: Sequelize.DATE,
  sendVerifyToken: Sequelize.TEXT,
  expiredVerifyToken: Sequelize.DATE
}, {
  sequelize: db,
  tableName: "user",
  createdAt: "created_at",
  updatedAt: "updated_at"
});

// Export
module.exports = User;