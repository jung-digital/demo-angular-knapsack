'use strict';

angular.module('appCoinReturn')
  .directive('ukCurrency', function(CoinParseService) {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {
      ngModelController.$parsers.push(CoinParseService.parse);
    }
  };
});
