define([], function() {
    'use strict';

    return function($scope, $http) {
        $scope.colors = {
            1: 'success',
            2: 'info',
            3: 'warning'
        };

        $http({method: 'GET', url: 'data/prices.json'}).
            success(function(data) {
                $scope.categories = data.categories || [];
            });

        $scope.download = function() {
            location.assign('/documents/multipack-price.doc');
        }
    };
});



