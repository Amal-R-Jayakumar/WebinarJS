app.factory('LiveFactory', ['$resource', function($resource){
  return $resource('/api/live/:id', null);
}]);

app.factory('ChatFactory', ['$resource', function($resource){
  return $resource('/api/chat/:id', null, {
    'update': { method:'PUT' }
  });
}]);
