const express = require('express');
const hbs = require('hbs');
require('./db');
const generalRouter = require('./routers/general');
const postsRouter = require('./routers/posts');

const app = express();
const port = 8484;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/', generalRouter);
app.use('/p', postsRouter);

app.listen(port, () => {
  console.log(`มาค่ะ http://localhost:${port}`);
});
