const { DataTypes } = require('sequelize');
const sequelize = require('./connect.js');

const register = sequelize.define('register', {
  // Define your model attributes here
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensures that each email is unique in the database.
    validate: {
      isEmail: true,
  }
},
  Mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensures that each mobile number is unique in the database.
    validate: {
      is: /^[0-9]{10}$/
  }
},
  Password: {
    type: DataTypes.STRING, // Limit the description to 200 characters
    allowNull: false,
  },

  // ...
});

module.exports = register;
