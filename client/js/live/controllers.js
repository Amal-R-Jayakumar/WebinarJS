app.controller('LiveDisplayCtrl', ['$scope', '$routeParams', 'LiveFactory', 'ChatFactory', 'socket', '$location', function ($scope, $routeParams, LiveFactory, ChatFactory, socket, $location, $sce) {
  $scope.live = LiveFactory.get({ id: $routeParams.id });

  $scope.messages = {};

  $scope.messages = ChatFactory.query({ thread: $routeParams.id });

  $scope.save = function(){
    if(!$scope.newMessage.content) return;
    var message = new ChatFactory({ user: $scope.newMessage.user, content: $scope.newMessage.content, thread: $routeParams.id });

    message.$save(function(){
      $scope.messages.push(message);
      $scope.newMessage = ''; // clear textbox
    });
  };
  socket.on('messages', function (messages, $scope) {
    console.log(messages);
  });
}]);
