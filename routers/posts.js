const express = require('express');
const dayjs = require('dayjs');
const db = require('../db');

const router = express.Router();

router.get('/new', (request, response) => {
  response.render('postNew');
});

router.post('/new', async (request, response) => {
  const { title, content, from, accepted } = request.body ?? {};
  try {
    // Validations
    if (!title || !content || !from) {
      throw new Error('no content');
    }
    else if (accepted !== 'on') {
      throw new Error('no accepted');
    }

    // Create post
    await db
      .insert({ title, content, from, createdAt: new Date() })
      .into('post');
  }
  catch (error) {
    console.error(error)
    let errorMessage = 'กรุณาตรวจสอบข้อมูลและลองใหม่';
    if (error.message === 'no content') {
      errorMessage = 'กรุณาใส่ข้อมูลให้ครบ';
    }
    else if (error.message === 'no accepted') {
      errorMessage = 'กรุณาติ๊กถูกยอมรับ';
    }
    return response.render('postNew', { errorMessage, values: request.body });
  }
  response.redirect('/p/new/done');
});

router.get('/new/done', (request, response) => {
  response.render('postNewDone');
});

router.get('/:postId', async (request, response) => {
  const { postId } = request.params;

  let onePost = null;
  let postComments = [];
  try {
    // Get post
    const somePosts = await db
      .select('*')
      .from('post')
      .where('id', +postId);
    onePost = somePosts[0];
    onePost.createdAtText = dayjs(onePost.createdAt).format('D MMM YYYY - H:mm');

    // Get comments
    postComments = await db
      .select('*')
      .from('comment')
      .where('postId', +postId);
    postComments = postComments.map(comment => {
      createdAtText = dayjs(comment.createdAt).format('D MMM YYYY - H:mm');
      return { ...comment, createdAtText }
    });
  }
  catch (error) {
    console.error(error);
  }

  const custom_title = onePost ? `${onePost.title} | ` : 'Not found | ';
  response.render('postId', { custom_title, onePost, postComments });
});

module.exports = router;
