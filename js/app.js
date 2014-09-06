define([
    'angular',
    'controllers/MainCtrl',
    'controllers/PricesCtrl',
    'controllers/CatalogCtrl',
    'controllers/SectionCtrl',
    'controllers/ContactsCtrl',
    'directives/map',
    'directives/anchor',
    'angular-route',
    'ui.bootstrap',
    'ui-templates'
], function(angular, MainCtrl, PricesCtrl, CatalogCtrl, SectionCtrl, ContactsCtrl, map, anchor) {
    'use strict';

    var app = angular.module('mainApp', ['ngRoute', 'ui.bootstrap', 'ui-templates']);

    app.directive('map', map);
    app.directive('anchor', anchor);
    app.controller('MainCtrl', MainCtrl);
    app.controller('PricesCtrl', PricesCtrl);
    app.controller('CatalogCtrl', CatalogCtrl);
    app.controller('SectionCtrl', SectionCtrl);
    app.controller('ContactsCtrl', ContactsCtrl);

    return app;
});

