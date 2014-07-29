define(['app'], function (app) {
    'use strict';

    return app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    controller: 'MainCtrl',
                    templateUrl: 'views/main.html'
                })
                .when('/contacts', {
                    controller: 'ContactsCtrl',
                    templateUrl: 'views/contacts.html'
                })
                .otherwise({redirectTo: '/'});
        }
    ]);
});


