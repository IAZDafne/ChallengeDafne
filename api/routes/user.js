const express = require('express');
const router = express.Router();
const {  getUserByID } = require('../Controllers/getUsers');
const { postUser, loginUser } = require('../Controllers/postUsers');


router.get('/:id',getUserByID);
router.post('/crear',postUser);
router.post('/login',loginUser);





module.exports = router;