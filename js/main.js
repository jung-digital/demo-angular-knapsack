var app = angular.module('myApp', [])
  .controller('controllerRoot', function ($scope) {
    $scope.text = "Hello World";

    $scope.calculate = function (amount) {
      if (isNaN(parseFloat(amount)))
        return 'Enter a number';
      return Math.sqrt(amount);
    }
  });