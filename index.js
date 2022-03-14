require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
require('./db');
const generalRouter = require('./routers/general');
const postsRouter = require('./routers/posts');

const app = express();
const port = process.env.APP_PORT ?? 8765;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use('/static', express.static('static'));

app.use('/', generalRouter);
app.use('/p', postsRouter);

app.listen(port, () => {
  console.log(`มาค่ะ http://localhost:${port}`);
});
