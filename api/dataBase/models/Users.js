const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
   
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    picture: {
        type: DataTypes.TEXT,
        defaultValue: "https://cdn2.vectorstock.com/i/thumb-large/04/96/user-icon-vector-19240496.jpg",
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
 
},
{
    timestamps: false,
});

module.exports = User;