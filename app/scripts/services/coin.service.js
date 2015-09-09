'use strict';

angular.module('appCoinReturn')
	.service('CoinService', function() {
		this.minimizeCoins = function(coinValues, targetAmount) {
			// Private recursive calculation function.
			function _calc(coins, amount) {
				var result;

				// Loop through each coin value, starting at maximum coin value.
				for (var ix = 0; ix < coinValues.length; ix++) {
					var nextVal = coinValues[ix].value * (coins[ix] + 1);
					if (nextVal > amount) {
						continue;
					}
					if (nextVal === amount) {
						result = coins.concat(); // Duplicate coins array.
						result[ix]++;
						break;
					}
					// Recurse
					result = coins.concat(); // Duplicate coins array.

					if (amount > nextVal) {
						var result2 = coins.concat();

						result[ix]++;
						result = _calc(result, amount - coinValues[ix]);

            if (result !== result2)
            {
              continue;
            }
					}
				}

				return result;
			}

			// ES5+ Only. Would need to use Babel.js or another transpiler to work on ES4 browsers.
			coinValues.sort(function(a, b) {
				return b - a ? -1 : 1;
			});

			var coinCounts = coinValues.map(function() {
					return 0;
				});

			return _calc(coinCounts) === targetAmount;
		};
	});