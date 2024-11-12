const express = require('express');
const postsController = require('../controllers/posts.controller')
const router = express.Router();

router.get('/', postsController.getPosts);
router.get('/getPostFromAuthorId', postsController.getPostsFromAuthorId);
router.get('/getPostFromAuthorNameOrEmailEqual', postsController.getPostsWhereNameOrEmailEqual);
router.get('/getPostFromAuthorNameOrEmailLike', postsController.getPostsWhereNameOrEmailLike);
router.post('/create', postsController.createPost);
router.delete('/delete', postsController.deletePost);
router.patch('/update', postsController.updatePost);

module.exports = router;
