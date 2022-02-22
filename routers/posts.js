const express = require('express');
const dayjs = require('dayjs');
const db = require('../db');

const router = express.Router();

router.get('/new', (request, response) => {
  response.render('postNew');
});

router.post('/new', (request, response) => {
  console.log(request.body);
  const { title } = request.body ?? {};
  response.send(`Submit ฟอร์มสร้างโพสต์ใหม่แล้วจ้า title = ${title}`);
});

router.get('/:postId', async (request, response) => {
  console.log(request.params);
  const { postId } = request.params;

  let onePost = null;
  let postComments = [];
  try {
    const somePosts = await db
      .select('*')
      .from('post')
      .where('id', +postId);
    onePost = somePosts[0];
    onePost.createdAtText = dayjs(onePost.createdAt).format('D MMM YYYY - H:mm');
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
