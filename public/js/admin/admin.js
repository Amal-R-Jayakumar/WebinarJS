var app = angular.module('app', ['ngRoute', 'ngResource']);

//---------------
// Services
//---------------

app.factory('LiveFactory', ['$resource', function($resource){
  return $resource('/api/live/:id', null, {
    'update': { method:'PUT' }
  });
}]);

//---------------
// Controllers
//---------------

app.controller('LiveController', ['$scope', 'LiveFactory', function ($scope, LiveFactory) {
  $scope.editing = [];
  $scope.lives = LiveFactory.query();

  $scope.save = function(){
    if(!$scope.newLive.name || $scope.newLive.name.length < 5) return;
    var live = new LiveFactory({ name: $scope.newLive.name, youtube: $scope.newLive.youtube });

    live.$save(function(){
      $scope.lives.push(live);
              $scope.newLive = ''; // clear textbox
            });
  };
}]);

app.controller('LiveDetailCtrl', ['$scope', '$routeParams', 'LiveFactory', '$location', function ($scope, $routeParams, LiveFactory, $location) {
  $scope.live = LiveFactory.get({id: $routeParams.id });

  $scope.edit = function(){
    $scope.editing = angular.copy($scope.live);
  };

  $scope.update = function(){
    LiveFactory.update({id: $scope.live._id}, $scope.live);
    $scope.editing = false;
  };

  $scope.cancel = function(){
    $scope.editing = false;
  };

  $scope.remove = function(){
    LiveFactory.remove({id: $scope.live._id}, function(){
      window.location = "../admin";
    });
  };
}]);