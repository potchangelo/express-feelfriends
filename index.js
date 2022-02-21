const express = require('express');
const hbs = require('hbs');
const knex = require('knex');
const generalRouter = require('./routers/general');
const postsRouter = require('./routers/posts');

const db = knex.default({
  client: 'mysql2',
  connection: {
    user: 'root',
    password: 'password1234',
    host: '127.0.0.1',
    port: 3306,
    database: 'express_fewfriends'
  }
});

const app = express();
const port = 8484;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/', async (req, res, next) => {
  const allPosts = await db('post').select('*').orderBy('id', 'desc');
  console.log(allPosts);
  next();
},  generalRouter);
app.use('/p', postsRouter);

app.listen(port, () => {
  console.log(`มาค่ะ http://localhost:${port}`);
});
