// Sequelize
const sequelize = require('sequelize');

// Connexion à la base de données
const dbConnection = new sequelize.Sequelize(process.env.PG_URL, {
    dialect: 'postgres'
});

// Export
module.exports = dbConnection;