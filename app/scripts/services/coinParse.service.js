'use strict';

angular.module('appCoinReturn')
  .service('CoinParseService', function() {
    this.parse = function (value) {
      var lbSymb = /^£/i.test(value),
          lbs = lbSymb || /\./i.test(value),
          pence = /p$/i.test(value) || !lbs;

      if (lbs && pence)
      {
        //return 'Please do not provide lbs and pence.';
      }
      else if (value.length == 0)
      {
        return 'Please enter a valid imperial currency. Empty is not allowed.';
      }

      var val = parseFloat(value.slice(lbSymb ? 1 : 0)).toFixed(2);

      if (isNaN(val) || /[^0-9.p£]/i.test(value))
      {
        return 'Please provide a valid imperial currency.';
      }

      return val * (lbs ? 100 : 1);
    };
  });