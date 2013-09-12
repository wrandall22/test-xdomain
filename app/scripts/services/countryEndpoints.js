'use strict';

angular.module('testAppApp')
  .service('countryEndpoints', function countryEndpoints($http) {
        var countries = {};

        countries.retrieve = function() {
            return $http.get('https://s3-us-west-2.amazonaws.com/bill-test-countries/countries.json');
        };

        return countries;
  });
