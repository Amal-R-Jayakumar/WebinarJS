var app = angular.module('app', ['ngRoute', 'ngResource']);

//---------------
// Services
//---------------

app.factory('LiveFactory', ['$resource', function($resource){
  return $resource('/live/:id', null, {
    'update': { method:'PUT' }
  });
}])

//---------------
// Controllers
//---------------

app.controller('LiveController', ['$scope', 'LiveFactory', function ($scope, LiveFactory) {
  $scope.editing = [];
  $scope.lives = LiveFactory.query();

  $scope.save = function(){
    if(!$scope.newLive || $scope.newLive.length < 1) return;
    var live = new LiveFactory({ name: $scope.newLive, completed: false });

    live.$save(function(){
      $scope.lives.push(live);
              $scope.newLive = ''; // clear textbox
            });
  }

  $scope.update = function(index){
    var live = $scope.lives[index];
    LiveFactory.update({id: live._id}, live);
    $scope.editing[index] = false;
  }

  $scope.edit = function(index){
    $scope.editing[index] = angular.copy($scope.lives[index]);
  }

  $scope.cancel = function(index){
    $scope.lives[index] = angular.copy($scope.editing[index]);
    $scope.editing[index] = false;
  }

  $scope.remove = function(index){
    var live = $scope.lives[index];
    LiveFactory.remove({id: live._id}, function(){
      $scope.lives.splice(index, 1);
    });
  }
}])