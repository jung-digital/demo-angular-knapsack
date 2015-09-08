var app = angular.module('myApp', ['ui.grid'])
  .controller('controllerRoot', function ($scope) {
    $scope.text = "100p";

    $scope.calculate = function (amount) {
      if (isNaN(parseFloat(amount)))
        return 'Enter a number';
      return Math.sqrt(amount);
    };
    $scope.myData = [
      {
        "Coin": "1p",
        "Amount": 1
      },
      {
        "Coin": "2p",
        "Amount": 1
      },
      {
        "Coin": "50p",
        "Amount": 1
      },
      {
        "Coin": "£1",
        "Amount": 1
      },
      {
        "Coin": "£2",
        "Amount": 1
      }
    ];
  });


var integerKnapsack = function(coinValues, targetAmount) {
  coinValues.sort((a, b) => b - a); // Sort desc
  var minCoins = targetAmount / coinValues[coinValues.length]; // Worst case
  var current = new Array(coinValues.length);
  var C = targetAmount; // Remaining value

  // for the current coin:
    // pick the largest value that fits in C
      // Bounding Step: Run greedy on remaining C to see if new min. is possible
      //Next, look at smaller coin values and follow same process
      //once C=0 (target value reached), see if # of coins is less than minCoins
        //If less, assign new minimum and record current solution as best so far
    // if currentCoin >= 2*(next coin), we don't bother with *any* lesser currentCoin values

};