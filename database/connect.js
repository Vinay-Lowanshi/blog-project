const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', // Change this to your database dialect (e.g., 'mysql')
  host: 'localhost',    // Your database host
  username: 'root',
  password: '12345',
  database: 'backend',
});

module.exports = sequelize;