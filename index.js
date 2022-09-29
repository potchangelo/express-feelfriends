require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
require('./db');
const generalRouter = require('./routers/general');
const postsRouter = require('./routers/posts');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Bangkok');

const app = express();
const port = process.env.APP_PORT ?? process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use('/static', express.static('static'));

app.use('/', generalRouter);
app.use('/p', postsRouter);

app.listen(port, () => {
  if (process.env.NODE_ENV === 'production') {
    console.log(`เย้เฮ่ ${port}`);
  } else {
    console.log(`มาค่ะ http://localhost:${port}`);
  }
});
