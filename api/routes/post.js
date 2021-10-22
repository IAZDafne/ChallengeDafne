const express = require('express');
const router = express.Router();
const {post} = require('../Controllers/PostPost');
const {getAllPost} = require('../Controllers/getPost');
const {deletePost} = require('../Controllers/deleteposts');
const {putController}= require('../Controllers/putPost')



router.get('/all', getAllPost);
router.post('/crear', post);
router.delete('/delete', deletePost)
router.put('/edit/:id',putController)



module.exports = router;