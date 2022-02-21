const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (request, response) => {
  let allPosts = [];
  try {
    allPosts = await db
      .select('post.id', 'post.title', 'post.from', 'post.createdAt')
      .count('comment.id as commentsCount')
      .from('post')
      .leftJoin('comment', 'post.id', 'comment.postId')
      .groupBy('post.id')
      .orderBy('post.id', 'desc');
  }
  catch (error) {
    console.error(error);
  }
  console.log(allPosts)
  response.render('home', { allPosts });
});

module.exports = router;
