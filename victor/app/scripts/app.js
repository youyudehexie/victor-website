'use strict';

angular.module('angularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/bras', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/panties', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/beauty', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/swim', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/vsx-sport', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/shoes', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/pink', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sale/bras', {
        templateUrl: 'views/production.html',
        controller: 'ProductionCtrl' 
      })
      .otherwise({
        redirectTo: '/bras'
      });
  });
