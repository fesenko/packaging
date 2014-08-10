define([], function() {
    'use strict';

    return function($scope, $http, $routeParams, $location, $anchorScroll, $timeout) {
        $scope.colors = {
            1: 'success',
            2: 'info',
            3: 'warning'
        };

        var type = $routeParams.type;

        $http({method: 'GET', url: 'data/prices.json'}).
            success(function(data) {
                $scope.categories = data.categories || [];

                if (type != 'all') {
                    $location.hash(type);
                    $timeout(function() {
                        $anchorScroll();
                        //$location.hash('');
                    }, 0);
                }
            });
    };
});



