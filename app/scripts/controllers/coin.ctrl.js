'use strict';

/**
 * @ngdoc function
 * @name appCoinReturn.controller:CoinCtrl
 * @description Application to simulate returning the fewest number of coins for change.
 * # CoinCtrl
 * Controller of the appCoinReturn
 */
angular.module('appCoinReturn')
	.controller('CoinCtrl', function($scope) {
		$scope.text = "100p";

		$scope.calculate = function(amount) {
			if (isNaN(parseFloat(amount))) {
				return 'Enter an imperial monetary value.';
			}

			return Math.sqrt(amount);
		};

		$scope.coinValues = [{
			text: "1p",
			value: 1
		}, {
			text: "2p",
			value: 2
		}, {
			text: "50p",
			value: 50
		}, {
			text: "£1",
			value: 100
		}, {
			text: "£2",
			value: 200
		}];
	});