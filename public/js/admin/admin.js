var app = angular.module('app', ['ngRoute', 'ngResource', 'angularMoment']);

app.directive("formatDate", function(){
  return {
   require: 'ngModel',
    link: function(scope, elem, attr, LiveDetailCtrl) {
      LiveDetailCtrl.$formatters.push(function(modelValue){
        return new Date(modelValue);
      });
    }
  };
});

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
    var live = new LiveFactory({ name: $scope.newLive.name, youtube: $scope.newLive.youtube, youtubeLink: "https://www.youtube.com/embed/" + $scope.newLive.youtube + "?showinfo=0&autoplay=1" });

    live.$save(function(){
      $scope.lives.push(live);
      $scope.newLive = ''; // clear textbox
    });
  };
}]);

app.controller('LiveDetailCtrl', ['$scope', '$routeParams', 'LiveFactory', '$location', 'amMoment', function ($scope, $routeParams, LiveFactory, $location) {
  
  $scope.live = LiveFactory.get({id: $routeParams.id });


  $scope.edit = function(){
    $scope.editing = angular.copy($scope.live);
  };

  $scope.update = function(){
    $scope.live.displayDate = moment($scope.live.date).format('dddd DD MMMM YYYY HH:MM');
    $scope.live.displayDate = $scope.live.displayDate[0].toUpperCase() + $scope.live.displayDate.slice(1);
    LiveFactory.update({id: $scope.live._id}, $scope.live);
    $scope.editing = false;
  };

  $scope.cancel = function(){
    $scope.editing = false;
  };

  $scope.remove = function(){
    LiveFactory.remove({id: $scope.live._id}, function(){
      window.location = "../admin#/";
    });
  };

  $scope.back = function(){
    window.location = "../admin#/";
  };

  $scope.accessLive = function(){
      window.location = "/live#/" + $scope.live._id;
  };
}]);

app.run(function(amMoment) {
  amMoment.changeLocale('fr');
});