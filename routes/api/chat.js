var express = require('express');
var router = express.Router();

var Chat = require('../../models/Chat.js');

/* GET /chat listing. */
router.get('/', function(req, res, next) {
  Chat.find(function (err, lives) {
    if (err) return next(err);
    res.json(lives);
  });
});

/* POST /chat */
router.post('/', function(req, res, next) {
  Chat.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /chat/id */
router.get('/:thread', function(req, res, next) {
  Chat.find({ thread: req.params.thread }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /chat/:id */
router.put('/:id', function(req, res, next) {
  Chat.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /chat/:id */
router.delete('/:id', function(req, res, next) {
  Chat.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
