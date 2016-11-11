var socketio = require('socket.io');
var Live = require('../models/Live.js');
var Chat = require('../models/Chat.js');
var User = require('../models/User.js');

module.exports.listen = function (app) {
  io = socketio.listen(app);
  var userLogged = 0;
  var connected = [];

  Live.distinct('_id', function (error, threads) {
    threads.forEach(function (thread) {
      connected[thread] = 0;
    }, this);
  });

  io.sockets.on('connection', function (socket) {
    var webinarid = "";

    socket.on('init', function (thread) {
      webinarid = thread;
      Chat.find({
        'thread': thread
      }, function (err, messages) {
        io.sockets.emit('get:messages', messages);
      });
    });

    socket.on('claim:username', function (data) {
      User.find(data, function (err, user) {
        if (user.length) {
          console.log('[' + data.thread + '] Username already taken');
          socket.emit('validate:username', 'userTaken');
        } else {
          User.create(data, function (err, success) {
            if (err) return next(err);
            console.log('[' + data.thread + '] New user : ' + success.user);
            socket.emit('validate:username', 'userFree');
            connected[data.thread]++;
            console.log('[' + data.thread + '] ' + connected[data.thread] + " clients connected");
            io.sockets.emit('nbUsers', {
              'nbUsers': connected[data.thread],
              'thread': data.thread
            });
            userLogged = 1;
          });
        }
      });
    });

    socket.on('send:message', function (message) {
      Chat.create(message, function (err, success) {
        if (err) return next(err);
        console.log('[' + success.thread + '] New message : ' + success);
      });
      socket.broadcast.emit('send:message', message);
    });

    socket.on('update:lives', function () {
      Live.distinct('_id', function (error, threads) {
        threads.forEach(function (thread) {
          connected[thread] = 0;
        }, this);
      });
    });

    socket.on('disconnect', function () {
      if (userLogged) {
        connected[webinarid]--;
      }
      console.log('[' + webinarid + '] ' + connected[webinarid] + " clients connected");
      io.sockets.emit('nbUsers', {
        'nbUsers': connected[webinarid],
        'thread': webinarid
      });
    });
  });

  return io;
};