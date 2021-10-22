require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name:'df8f7pqh4', 
    api_key:'489883481289976', 
    api_secret:'XINM3l3o27jd5V2BRe9ZhGyRTJg' 
  });

module.exports = { cloudinary };