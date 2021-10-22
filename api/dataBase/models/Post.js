const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Post = sequelize.define('post', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
   
   dificulty: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    picture: {
        type: DataTypes.TEXT,
        defaultValue: "https://www.uco.es/vidauniversitaria/deportes/images/img/noticias/blog_archivo/blog_130320.jpg",
    },
    
    
 
},
{
    timestamps: false,
});

module.exports = Post;