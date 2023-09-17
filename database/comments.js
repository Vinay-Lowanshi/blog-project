// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('./connect.js');

const comments = sequelize.define('comments', {
  // Define your model attributes here
  sno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  // ...
});

module.exports = comments;
