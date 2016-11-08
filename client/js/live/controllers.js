app.controller('LiveDisplayCtrl', ['$scope', '$routeParams', 'LiveFactory', 'ChatFactory', 'socket', '$location', function ($scope, $routeParams, LiveFactory, ChatFactory, socket, $location, $sce) {
  $scope.live = LiveFactory.get({
    id: $routeParams.id
  });

  $scope.messages = {};


  $scope.messages = ChatFactory.query({
    thread: $routeParams.id
  });

  /* $scope.save = function () {
    if (!$scope.newMessage.content) return;
    var message = new ChatFactory({
      user: $scope.newMessage.user,
      content: $scope.newMessage.content,
      thread: $routeParams.id
    });

    message.$save(function () {
      $scope.messages.push(message);
      $scope.newMessage = ''; // clear textbox
    });
  }; */

  //Socket listeners

  socket.on('init', function (data) {
    console.log(data);
  });

  socket.emit('get:messages', $routeParams.id);

  socket.on('get:messages', function (messages) {
    $scope.messages = messages;
  });

  socket.on('send:message', function (message) {
    $scope.messages.push(message);
  });


  // Methods published to the scope
  // ==============================

  $scope.sendMessage = function () {
    socket.emit('send:message', {
      content: $scope.newMessage.content,
      thread: $routeParams.id
    });

    // add the message to our model locally
    $scope.messages.push({
      content: $scope.newMessage.content
    });

    // clear message box
    $scope.newMessage.content = '';
  };

}]);