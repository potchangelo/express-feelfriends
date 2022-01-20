const express = require('express');
const app = express();
const port = 8484;

app.get('/', (request, response) => {
  response.send('สวัสดีหน้าแรก 555');
});

app.listen(port, () => {
  console.log(`มาค่ะ http://localhost:${port}`);
});
