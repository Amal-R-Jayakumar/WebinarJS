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

//---------------
// Controllers
//---------------

app.controller('LiveDisplayCtrl', ['$scope', '$routeParams', 'LiveFactory', '$location', function ($scope, $routeParams, LiveFactory, $location, $sce) {
  $scope.live = LiveFactory.get({id: $routeParams.id });
}]);