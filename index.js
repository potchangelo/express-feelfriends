const express = require('express');
const app = express();
const port = 8484;

app.get('/', (request, response) => {
  console.log(request.query);
  const { q, sortBy } = request.query;
  response.send(`สวัสดีหน้าแรก 555 - ค้นหาคำว่า ${q}, เรียงลำดับจาก ${sortBy}`);
});

app.get('/p/:postId', (request, response) => {
  console.log(request.params);
  const { postId } = request.params;
  response.send(`สวัสดีหน้าโพสต์เดียว ID = ${postId}`);
});

app.listen(port, () => {
  console.log(`มาค่ะ http://localhost:${port}`);
});
