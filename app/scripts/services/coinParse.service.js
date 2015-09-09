'use strict';

angular.module('appCoinReturn')
  .service('CoinParseService', function() {
    this.parse = function (value) {
      var lbs = /^£/i.test(value),
          pence = /p$/i.test(value);

      if (lbs && pence)
      {
        return 'Please do not provide lbs and pence.';
      }
      else if (!(lbs || pence)) // DeMorgan's
      {
        return 'Please provide a denomination.';
      }

      if (lbs)
      {
        return parseFloat(value.slice(1)) * 100;
      }

      var val = parseFloat(value);

      if (isNaN(val))
      {
        return 'Please provide a valid imperial currency.';
      }

      return val;
    };
  });