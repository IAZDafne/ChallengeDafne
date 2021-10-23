
const express = require('express');
const cors = require('cors')
const app = express();
const sequelize = require('./dataBase/db');
require('./database/relations');

const port = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())



app.use('/user',require('./routes/user'));
app.use('/dafne/post',require('./routes/post'))
app.use('/cloudinary',require('./routes/cloudinary'))

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening at port:${port}`);



  sequelize.sync({ force: true}).then(async () => {

    console.log('Conection to the DB Success');
  
    
  }).catch(error => {
    console.log('An error has been found: ', error)
  })
})
