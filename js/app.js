define([
    'angular',
    'controllers/MainCtrl',
    'controllers/ContactsCtrl',
    'directives/map',
    'angular-route',
    'ui.bootstrap',
    'ui-templates'
], function(angular, MainCtrl, ContactsCtrl, map) {
    'use strict';

    var app = angular.module('mainApp', ['ngRoute', 'ui.bootstrap', 'ui-templates']);

    app.directive('map', map);
    app.controller('MainCtrl', MainCtrl);
    app.controller('ContactsCtrl', ContactsCtrl);

    return app;
});

