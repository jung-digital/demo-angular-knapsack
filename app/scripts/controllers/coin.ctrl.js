'use strict';

/**
 * @ngdoc function
 * @name appCoinReturn.controller:CoinCtrl
 * @description Application to simulate returning the fewest number of coins for change.
 * # CoinCtrl
 * Controller of the appCoinReturn
 */
angular.module('appCoinReturn')
  .controller('CoinCtrl', function($scope, CoinService) {
    $scope.text = "100p";

    $scope.returnChange = function() {
      $scope.result = CoinService.returnChangeFor($scope.coinValues, $scope.currency);
    };

    $scope.coinValues = [{
      text: "£2",
      value: 200
    }, {
      text: "£1",
      value: 100
    }, {
      text: "50p",
      value: 50
    }, {
      text: "20p",
      value: 20
    }, {
      text: "2p",
      value: 2
    }, {
      text: "1p",
      value: 1
    }];
  });