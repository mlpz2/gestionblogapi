const express = require('express');
const postsController = require('../controllers/posts.controller')
const router = express.Router();

router.get('/', postsController.getPosts);
router.post('/create', postsController.createPost);
router.delete('/delete', postsController.deletePost);

module.exports = router;
