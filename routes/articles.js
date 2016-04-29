
var express = require('express');
var ctrArticles = require('../controlers/articles')
var router = express.Router();

/* GET users listing. */
router.get('/add', ctrArticles.Add);
router.post('/add', ctrArticles.Detail);

module.exports = router;