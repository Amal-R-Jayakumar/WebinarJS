app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/lives.html',
    controller: 'LiveController'
  })

  .when('/:id', {
    templateUrl: 'templates/liveDetails.html',
    controller: 'LiveDetailCtrl'
  });
}]);