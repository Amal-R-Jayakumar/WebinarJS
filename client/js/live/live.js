var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
    ]);
});

//---------------
// Services
//---------------

app.factory('LiveFactory', ['$resource', function($resource){
  return $resource('/api/live/:id', null);
}]);

app.factory('ChatFactory', ['$resource', function($resource){
  return $resource('/api/chat/:id', null, {
    'update': { method:'PUT' }
  });
}]);

//---------------
// Controllers
//---------------

app.controller('LiveDisplayCtrl', ['$scope', '$routeParams', 'LiveFactory', 'ChatFactory', '$location', function ($scope, $routeParams, LiveFactory, ChatFactory, $location, $sce) {
  $scope.live = LiveFactory.get({ id: $routeParams.id });

  $scope.messages = {};

  $scope.messages = ChatFactory.query({ thread: $routeParams.id });

  $scope.save = function(){
    if(!$scope.newMessage.user || !$scope.newMessage.content) return;
    var message = new ChatFactory({ user: $scope.newMessage.user, content: $scope.newMessage.content, thread: $routeParams.id });

    message.$save(function(){
      $scope.messages.push(message);
      $scope.newMessage = ''; // clear textbox
    });
  };
}]);