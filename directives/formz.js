
aigeo.directive('formz', [function() {
  return {
    restrict: 'E',
    templateUrl: '/directives/app-body.html',
    link: (scope)=>{
      scope.text = 'bitch you guessed it';
      scope.report = function() {
        console.log('button Pressed');
      };
    }
  };
}]);
