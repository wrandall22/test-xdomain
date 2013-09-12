'use strict';

angular.module('testAppApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
            countries: function(countryCrud) {
                return countryCrud.retrieve();
            }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
