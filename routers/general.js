const express = require('express');
const dayjs = require('dayjs');
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
    allPosts = allPosts.map(onePost => {
      createdAtText = dayjs.tz(onePost.createdAt).format('D MMM YYYY - H:mm');
      return { ...onePost, createdAtText };
    });
  }
  catch (error) {
    console.error(error);
  }
  response.render('home', { allPosts });
});

module.exports = router;
