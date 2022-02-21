const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (request, response) => {
  let allPosts = [];
  try {
    allPosts = await db('post').select('*').orderBy('id', 'desc');
  }
  catch (error) {
    console.error(error);
  }
  response.render('home', { allPosts });
});

module.exports = router;
