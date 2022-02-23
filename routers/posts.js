const express = require('express');
const dayjs = require('dayjs');
const db = require('../db');

const router = express.Router();

async function getPostPageData(postId) {
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
      .where('postId', +postId)
      .orderBy('id', 'asc');
    postComments = postComments.map(comment => {
      createdAtText = dayjs(comment.createdAt).format('D MMM YYYY - H:mm');
      return { ...comment, createdAtText };
    });
  }
  catch (error) {
    console.error(error);
  }

  const customTitle = onePost ? `${onePost.title} | ` : 'Not found | ';
  return { onePost, postComments, customTitle }
}

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
    return response.render('postNew', { errorMessage, values: { title, content, from } });
  }
  response.redirect('/p/new/done');
});

router.get('/new/done', (request, response) => {
  response.render('postNewDone');
});

router.get('/:postId', async (request, response) => {
  const { postId } = request.params;
  const postPageData = await getPostPageData(postId);
  response.render('postId', postPageData);
});

router.post('/:postId/comment', async (request, response) => {
  const { postId } = request.params;
  const { content, from, accepted } = request.body ?? {};

  try {
    // Validations
    if (!content || !from) {
      throw new Error('no content');
    }
    else if (accepted !== 'on') {
      throw new Error('no accepted');
    }

    // Create comment
    await db.insert({ content, from, createdAt: new Date(), postId }).into('comment');
  }
  catch (error) {
    // Error message
    console.error(error);
    let errorMessage = 'กรุณาตรวจสอบข้อมูลและลองใหม่';
    if (error.message === 'no content') {
      errorMessage = 'กรุณาใส่ข้อมูลให้ครบ';
    }
    else if (error.message === 'no accepted') {
      errorMessage = 'กรุณาติ๊กถูกยอมรับ';
    }

    // Get post and comments
    const postPageData = await getPostPageData(postId);
    postPageData.errorMessage = errorMessage;
    postPageData.commentValues = { content, from };

    return response.render('postId', postPageData);
  }

  response.redirect(`/p/${postId}`);
});

module.exports = router;
