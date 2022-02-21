const express = require('express');
const allPosts = require('./samplePosts');

const router = express.Router();

router.get('/new', (request, response) => {
  response.render('postNew');
});

router.post('/new', (request, response) => {
  console.log(request.body);
  const { title } = request.body ?? {};
  response.send(`Submit ฟอร์มสร้างโพสต์ใหม่แล้วจ้า title = ${title}`);
});

router.get('/:postId', (request, response) => {
  console.log(request.params);
  const { postId } = request.params;
  const onePost = allPosts.find(post => post.id === +postId);
  const custom_title = onePost ? `${onePost.title} | ` : 'Not found | ';
  response.render('postId', { custom_title, onePost });
});

module.exports = router;
