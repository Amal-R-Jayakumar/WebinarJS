app.controller('LiveDisplayCtrl', ['$scope', '$routeParams', 'LiveFactory', 'ChatFactory', 'socket', '$location', function ($scope, $routeParams, LiveFactory, ChatFactory, socket, $location, $sce) {

  $scope.live = LiveFactory.get({
    id: $routeParams.id
  });

  $scope.messages = {};

  // Socket listeners

  socket.on('nbUsers', function (nbUsers) {
    $scope.nbUsers = nbUsers;
    console.log(nbUsers);
  });

  socket.emit('get:messages', $routeParams.id);

  socket.on('get:messages', function (messages) {
    $scope.messages = messages;

  });

  socket.on('send:message', function (message) {
    $scope.messages.push(message);
  });


  // Methods published to the scope

  $scope.claimUsername = function () {
    $scope.userOk = 0;

    console.log($scope.newMessage.user);

    if ($scope.newMessage.user) {
      $scope.userOk = 1;
    } else {
      $scope.userOk = 0;
    }
  };

  $scope.sendMessage = function () {

    if ($scope.userOk == 1) {
      socket.emit('send:message', {
        user: $scope.newMessage.user,
        content: $scope.newMessage.content,
        hour: new Date().getHours().toString(),
        minutes: new Date().getMinutes().toString(),
        thread: $routeParams.id
      });

      $scope.messages.push({
        user: $scope.newMessage.user,
        content: $scope.newMessage.content,
        hour: new Date().getHours().toString(),
        minutes: new Date().getMinutes().toString(),
        thread: $routeParams.id
      });

      $scope.newMessage.content = '';
    }
  };

}]);