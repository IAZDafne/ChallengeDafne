require('dotenv').config();

const { DB_USER,
        DB_PASSWORD,
        DB_HOST,
 } = process.env;

module.exports = {
    database:{
        username: `${DB_USER}`,
        password: `${DB_PASSWORD}`,
        database: 'Pruebas', 
        host: `${DB_HOST}`
    }
} 