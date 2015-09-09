'use strict';

/**
 * @ngdoc overview
 * @name appCoinReturn
 * @description
 * # appCoinReturn
 *
 * Primary application module responsible for wrapping all functionality.
 */
angular
  .module('appCoinReturn', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CoinCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
