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
                    templateUrl: 'views/catalog.html'
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


