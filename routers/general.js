const express = require('express');
const allPosts = require('./samplePosts');

const router = express.Router();

router.get('/', (request, response) => {
  response.render('home', { allPosts });
});

module.exports = router;
