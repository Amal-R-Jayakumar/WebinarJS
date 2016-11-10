var socketio = require('socket.io');
var Chat = require('../models/Chat.js');

var thread = "581cc1d5a979f36f0fd018f5";
console.log(thread);

module.exports.listen = function (app) {
  io = socketio.listen(app);

  var connected = 0;

  io.sockets.on('connection', function (socket) {
    connected++;
    console.log(connected + " clients connected");
    io.sockets.emit('nbUsers', connected);

    socket.on('get:messages', function (thread) {
      Chat.find({
        'thread': thread
      }, function (err, messages) {
        io.sockets.emit('get:messages', messages);
      });
    });

    socket.on('disconnect', function () {
      connected--;
      console.log(connected + " clients connected");
      io.sockets.emit('init', connected);
    });

    socket.on('send:message', function (message) {
      Chat.create(message, function (err, success) {
        if (err) return next(err);
        console.log('New message : ' + success);
      });
      socket.broadcast.emit('send:message', message);
    });
  });

  return io;
};