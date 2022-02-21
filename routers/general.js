const express = require('express');
const db = require('../db');
const allPosts = require('./samplePosts');

const router = express.Router();

router.get('/', async (request, response) => {
  const realAllPosts = await db('post').select('*');
  console.log(realAllPosts);
  response.render('home', { allPosts });
});

module.exports = router;
