
const express = require('express');
const cors = require('cors')
const app = express();
const sequelize = require('./database/db');
const User = require('./database/models/User');
require('./database/relations');

//setting

const port = process.env.PORT || 3001


//Middleware express para llenar el body
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())




//app.use('/test', require('./routes/rutaprueba'));//ruta de prueba


app.listen(port, '0.0.0.0', () => {
  console.log(`Listening at port:${port}`);

  //conectar base de datos

  sequelize.sync({ force: false }).then(async () => {

    console.log('Conection to the DB Success');
  
    
  }).catch(error => {
    console.log('An error has been found: ', error)
  })
})
