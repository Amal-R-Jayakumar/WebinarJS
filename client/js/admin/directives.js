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
