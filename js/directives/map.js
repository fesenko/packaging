define(['maps'], function(maps) {
    'use strict';

    return function() {
        return {
            restrict: 'E',
            link: function(scope, elem, attrs) {
                var x = attrs.x || 55.733835;
                var y = attrs.y || 37.588227;
                var placemark = attrs.placemark;

                maps.ready(function() {
                    var map = new maps.Map(elem[0], {
                        center: [x, y],
                        zoom: 15
                    });

                    if (placemark) {
                        var placemarkObj = new maps.Placemark(map.getCenter(), {
                            balloonContentBody: [
                                '<address>',
                                    '<strong>' + placemark + '</strong>',
                                '</address>'
                            ].join('')
                        }, {
                            preset: 'islands#brownDotIcon'
                        });

                        map.geoObjects.add(placemarkObj);
                    }
                });

            }
        }
    }
});

