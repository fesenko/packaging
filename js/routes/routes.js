define(['app'], function (app) {
    'use strict';

    return app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    controller: 'MainCtrl',
                    templateUrl: 'views/main.html'
                })
                .when('/catalog', {
                    controller: 'CatalogCtrl',
                    templateUrl: 'views/catalog.html'
                })
                .when('/catalog/food_stretch', {
                    templateUrl: 'views/catalog/food_stretch.html'
                })
                .when('/catalog/checks', {
                    templateUrl: 'views/catalog/checks.html'
                })
                .when('/catalog/containers', {
                    templateUrl: 'views/catalog/containers.html'
                })
                .when('/catalog/pallet_stretch', {
                    templateUrl: 'views/catalog/pallet_stretch.html'
                })
                .when('/catalog/shrink', {
                    templateUrl: 'views/catalog/shrink.html'
                })
                .when('/catalog/vacuum_packages', {
                    templateUrl: 'views/catalog/vacuum_packages.html'
                })
                .when('/prices', {
                    controller: 'PricesCtrl',
                    templateUrl: 'views/prices.html'
                })
                .when('/contacts', {
                    templateUrl: 'views/contacts.html'
                })
                .otherwise({redirectTo: '/'});
        }
    ]);
});


