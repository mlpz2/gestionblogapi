const express = require('express');

const postsController = require('../controllers/posts.controller');

const router = express.Router();



router.get('/', postsController.getPosts);



module.exports = router;