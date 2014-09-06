define([], function() {
    'use strict';

    return function($scope) {
        $scope.print = function() {
            var popup = window.open('/map.html', 'map', 'width=9000,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1');

            popup.print();
        }
    };
});



