'use strict';

angular.module('appCoinReturn')
  .service('CoinParseService', function() {
    this.parse = function (value) {
      var lbSymb = /^£/i.test(value),
          lbs = lbSymb || /\./i.test(value),
          pence = /p$/i.test(value);

      if (value.length == 0)
      {
        return 'Please enter a valid imperial currency. Empty is not allowed.';
      }
      else if (!lbs && !pence && !/^[0-9]+$/i.test(value))
      {
        return 'Please provide a valid imperial currency.';
      }

      var val = parseFloat(value.slice(lbSymb ? 1 : 0)).toFixed(2);

      if (isNaN(val) || /[^0-9.p£]/i.test(value))
      {
        return 'Please provide a valid imperial currency.';
      }

      return Math.round(val * (lbs ? 100 : 1));
    };
  });