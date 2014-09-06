define([], function() {
    'use strict';

    return function($routeParams, $timeout) {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                var anchor = attrs.anchor;
                var type = $routeParams.type;

                if (anchor == type) {
                    $timeout(function() {
                        elem[0].scrollIntoView();
                    }, 10);
                }
            }
        }
    }
});

