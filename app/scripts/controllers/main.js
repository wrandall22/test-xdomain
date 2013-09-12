'use strict';

angular.module('testAppApp')
    .controller('MainCtrl', function ($scope, countries) {
        $scope.initMainPage = function () {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            $scope.countries = countries;
        };

    });
