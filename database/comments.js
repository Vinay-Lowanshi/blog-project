// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('./connect.js');

const comments = sequelize.define('comments', {
  // Define your model attributes here
  id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  // ...
});

module.exports = comments;
