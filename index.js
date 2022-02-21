const express = require('express');
const app = express();
const port = 8484;

app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  console.log(request.query);
  const { q, sortBy } = request.query;
  response.send(`สวัสดีหน้าแรก 555 - ค้นหาคำว่า ${q}, เรียงลำดับจาก ${sortBy}`);
});

app.get('/p/new', (request, response) => {
  response.send('ฟอร์มสร้างโพสต์ใหม่');
});

app.post('/p/new', (request, response) => {
  console.log(request.body);
  const { title } = request.body ?? {};
  response.send(`Submit ฟอร์มสร้างโพสต์ใหม่แล้วจ้า title = ${title}`);
});

app.get('/p/:postId', (request, response) => {
  console.log(request.params);
  const { postId } = request.params;
  response.send(`สวัสดีหน้าโพสต์เดียว ID = ${postId}`);
});

app.listen(port, () => {
  console.log(`มาค่ะ http://localhost:${port}`);
});
