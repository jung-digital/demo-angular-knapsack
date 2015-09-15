'use strict';

angular.module('appCoinReturn')
  .service('CoinService', function() {
    // Greedy algorithm will not account for the scenario where coin at i is less than 2x coin at (i+1)!!
    this.returnChangeFor = function(coinValues, fullAmount) {
      if (!coinValues || !coinValues.length)
      {
        throw 'Please provide a valid coinValues array.';
      }

      // Private recursive calculation function.
      function _calc(coins, amount) {
        var result;

        // Loop through each coin value, starting at maximum coin value.
        for (var ix = 0; ix < coinValues.length; ix++) {
          var coinVal = coinValues[ix].value;

          if (!coinVal)
          {
            throw ('Coin value at ix ' + ix + ' is invalid.');
          }

          if (coinVal > amount) {
            continue; // To next lower coin denomination.
          }

          if (coinVal === amount) {
            result = coins.concat();
            result[ix]++;
            break;
          }

          var next = coins.concat();
          next[ix]++;

          return _calc(next, amount - coinVal);
        }

        return result;
      }

      coinValues.sort(function(a, b) {
        return b.value - a.value > 0 ? 1 : -1;
      });

      var coins = coinValues.map(function() {return 0;});

      return _calc(coins, fullAmount);
    };
  });