const { cloudinary } = require('../cloudinaryConfig');
const express = require('express');
const router = express.Router();



router.get('/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:cloudinary_challange')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    console.log(publicIds,'publicIds..')
    res.send(publicIds);
    console.log('hola soy publicids',publicIds)
});
module.exports = router;