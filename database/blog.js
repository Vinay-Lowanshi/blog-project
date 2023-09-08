// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('./connect.js');

const blog = sequelize.define('blogs', {
  // Define your model attributes here
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  // ...
});

module.exports = blog;
