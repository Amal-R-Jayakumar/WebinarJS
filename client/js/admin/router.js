app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/admin/lives.html',
    controller: 'LiveController'
  })

  .when('/:id', {
    templateUrl: 'templates/admin/liveDetails.html',
    controller: 'LiveDetailCtrl'
  });
}]);
