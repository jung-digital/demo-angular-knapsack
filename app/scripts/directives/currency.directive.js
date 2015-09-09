'use strict';

angular.module('appCoinReturn')
  .directive('currency', function(CoinParseService) {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModelController) {
      ngModelController.$parsers.push(CoinParseService.parse);
    }
  }
});
