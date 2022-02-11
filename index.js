const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8484;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

const allPosts = [
  { id: 2, title: 'น่ารัก 2', createdAtText: '14 April 2022', commentsCount: 3 },
  { id: 1, title: 'น่ารัก 1', createdAtText: '10 April 2022', commentsCount: 0 }
];

app.get('/', (request, response) => {
  response.render('home', { allPosts });
});

app.get('/p/new', (request, response) => {
  response.render('postNew');
});

app.post('/p/new', (request, response) => {
  console.log(request.body);
  const { title } = request.body;
  response.send(`Submit ฟอร์มสร้างโพสต์ใหม่แล้วจ้า title = ${title}`);
});

app.get('/p/:postId', (request, response) => {
  console.log(request.params);
  const { postId } = request.params;
  const onePost = allPosts.find(post => post.id === +postId);
  const custom_title = onePost ? `${onePost.title} | ` : 'Not found | ';
  response.render('postId', { custom_title, onePost });
});

app.listen(port, () => {
  console.log(`มาค่ะ http://localhost:${port}`);
});
