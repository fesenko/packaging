(function() {
    var vendors = '../vendors/';

    require.config({
        baseUrl: 'js/',
        paths: {
            'angular': vendors + 'angular/angular.min',
            'angular-route': vendors + 'angular-route/angular-route.min',
            'maps': 'http://api-maps.yandex.ru/2.1/?lang=ru_RU'
        },
        shim: {
            'angular': {
                'exports': 'angular'
            },
            'angular-route': {
                'deps': ['angular']
            },
            'maps': {
                'exports': 'ymaps'
            }
        }
    });

    require(['angular', 'routes/routes'], function(angular) {
        'use strict';

        angular.bootstrap(document, ['mainApp']);
    });
})();
