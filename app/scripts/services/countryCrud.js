'use strict';

angular.module('testAppApp')
    .service('countryCrud', function countryCrud($q, countryEndpoints) {
        var countryCrud = {};

        countryCrud.retrieve = function() {
            var deferred = $q.defer();

            countryEndpoints.retrieve()
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    alert(headers);
                });
            return deferred.promise;
        };

        return countryCrud;
    });
