define([
    'angular',
    'controllers/MainCtrl',
    'controllers/PricesCtrl',
    'directives/map',
    'angular-route',
    'ui.bootstrap',
    'ui-templates'
], function(angular, MainCtrl, PricesCtrl, map) {
    'use strict';

    var app = angular.module('mainApp', ['ngRoute', 'ui.bootstrap', 'ui-templates']);

    app.directive('map', map);
    app.controller('MainCtrl', MainCtrl);
    app.controller('PricesCtrl', PricesCtrl);

    return app;
});

