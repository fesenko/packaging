define([
    'angular',
    'controllers/MainCtrl',
    'controllers/PricesCtrl',
    'controllers/CatalogCtrl',
    'controllers/SectionCtrl',
    'directives/map',
    'angular-route',
    'ui.bootstrap',
    'ui-templates'
], function(angular, MainCtrl, PricesCtrl, CatalogCtrl, SectionCtrl, map) {
    'use strict';

    var app = angular.module('mainApp', ['ngRoute', 'ui.bootstrap', 'ui-templates']);

    app.directive('map', map);
    app.controller('MainCtrl', MainCtrl);
    app.controller('PricesCtrl', PricesCtrl);
    app.controller('CatalogCtrl', CatalogCtrl);
    app.controller('SectionCtrl', SectionCtrl);

    return app;
});

