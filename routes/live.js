var express = require('express');
var router = express.Router();

var Live = require('../models/Live.js');

/* GET /live listing. */
router.get('/', function(req, res, next) {
  Live.find(function (err, lives) {
    if (err) return next(err);
    res.json(lives);
  });
});

/* POST /live */
router.post('/', function(req, res, next) {
  Live.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /live/id */
router.get('/:id', function(req, res, next) {
  Live.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /live/:id */
router.put('/:id', function(req, res, next) {
  Live.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /live/:id */
router.delete('/:id', function(req, res, next) {
  Live.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
