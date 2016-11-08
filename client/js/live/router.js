app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
    ]);
});

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/live/notFound.html'
  })

  .when('/:id', {
    templateUrl: 'templates/live/liveDisplay.html',
    controller: 'LiveDisplayCtrl'
  });
}]);
