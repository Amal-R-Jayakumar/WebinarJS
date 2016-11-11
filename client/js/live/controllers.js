app.controller('LiveDisplayCtrl', ['$scope', '$routeParams', 'LiveFactory', 'ChatFactory', 'socket', '$location', function ($scope, $routeParams, LiveFactory, ChatFactory, socket, $location, $sce) {

  $scope.live = LiveFactory.get({
    id: $routeParams.id
  });

  $scope.messages = {};
  $scope.youtubeLink = "";


  // Send init request to server

  socket.emit('init', $routeParams.id);


  // Socket listeners

  socket.on('validate:username', function (data) {
    if (data == 'userFree') {
      socket.emit('user:connected');
      $scope.userOk = 1;
      $scope.live.youtubeLink = "https://www.youtube.com/embed/" + $scope.live.youtube + "?showinfo=0&autoplay=1";
    } else {
      alert("Username already taken.");
    }
  });

  socket.on('get:messages', function (messages) {
    $scope.messages = messages;

  });

  socket.on('nbUsers', function (data) {
    if (data.thread == $routeParams.id) {
      $scope.nbUsers = data.nbUsers;
      console.log(data.nbUsers);
    }
  });

  socket.on('send:message', function (message) {
    $scope.messages.push(message);
  });


  // Methods published to the scope

  $scope.claimUsername = function () {
    $scope.userOk = 0;

    if ($scope.username.length >= 5) {
      socket.emit('claim:username', {
        user: $scope.username,
        thread: $routeParams.id
      });
    } else {
      alert('Your username should contain at least 5 characters');
    }
  };

  $scope.sendMessage = function () {

    if ($scope.userOk == 1) {
      socket.emit('send:message', {
        'user': $scope.username,
        'content': $scope.newMessage.content,
        'hour': new Date().getHours().toString(),
        'minutes': new Date().getMinutes().toString(),
        'thread': $routeParams.id
      });

      $scope.messages.push({
        user: $scope.username,
        content: $scope.newMessage.content,
        hour: new Date().getHours().toString(),
        minutes: new Date().getMinutes().toString(),
        thread: $routeParams.id
      });

      $scope.newMessage.content = '';
    }
  };

}]);