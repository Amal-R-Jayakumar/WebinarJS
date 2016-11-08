// Functions for socket module
var foo = (function () {

  var bar = function () {
    // function foo.bar();
  };

  var baz = function () {
    // function foo.baz();
  };

}());


// export function for listening to the socket
module.exports = function (socket) {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('a user disconnected');
  });
};