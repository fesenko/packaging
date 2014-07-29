define([
    'angular',
    'controllers/MainCtrl',
    'controllers/ContactsCtrl',
    'directives/map',
    'angular-route'
], function(angular, MainCtrl, ContactsCtrl, map) {
    'use strict';

    var app = angular.module('mainApp', ['ngRoute']);

    app.directive('map', map);
    app.controller('MainCtrl', MainCtrl);
    app.controller('ContactsCtrl', ContactsCtrl);

    return app;
});

