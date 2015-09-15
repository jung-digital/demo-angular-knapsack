'use strict';

angular.module('appCoinReturn')
  .service('CoinParseService', function() {
    this.parse = function (value) {
      var match = /(^£?)(.*?)(p?$)/.exec(value);
      var lbSymb = match[1],
          lbs = lbSymb || /\./i.test(value);

      if (match[2].length == 0)
      {
        return 'Please enter a valid imperial currency. No digits found.';
      }

      var val = parseFloat(value.slice(lbSymb ? 1 : 0)).toFixed(2);

      if (isNaN(val) || /[^0-9.]/i.test(match[2]))
      {
        return 'Please provide a valid imperial currency.';
      }

      return Math.round(val * (lbs ? 100 : 1));
    };
  });