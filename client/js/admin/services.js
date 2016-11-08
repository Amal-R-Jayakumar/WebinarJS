app.factory('LiveFactory', ['$resource', function($resource){
  return $resource('/api/live/:id', null, {
    'update': { method:'PUT' }
  });
}]);
