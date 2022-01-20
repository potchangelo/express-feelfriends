const express = require('express');
const app = express();
const port = 8484;

app.get('/', (req, res) => {
  res.send('สวัสดีหน้าแรก');
});

app.listen(port, () => {
  console.log(`มาค่ะ http://localhost:${port}`);
});
