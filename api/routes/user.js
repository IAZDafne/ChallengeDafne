const express = require('express');
const router = express.Router();
const {  getUserByID ,getToken} = require('../Controllers/getUsers');
const { postUser, loginUser } = require('../Controllers/postUsers');


router.get('/:id',getUserByID);
router.get('/', getToken)
router.post('/crear',postUser);
router.post('/login',loginUser);





module.exports = router;