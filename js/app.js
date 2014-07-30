define([
    'angular',
    'controllers/MainCtrl',
    'directives/map',
    'angular-route',
    'ui.bootstrap',
    'ui-templates'
], function(angular, MainCtrl, map) {
    'use strict';

    var app = angular.module('mainApp', ['ngRoute', 'ui.bootstrap', 'ui-templates']);

    app.directive('map', map);
    app.controller('MainCtrl', MainCtrl);

    return app;
});

