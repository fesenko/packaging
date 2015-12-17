(function () {
    var elem = $('#map')[0];

  ymaps.ready(function() {
    var map = new ymaps.Map(elem, {
        center: [55.717862, 37.702749],
        zoom: 15
    });

    var placemarkObj = new ymaps.Placemark(map.getCenter(), {
        balloonContentBody: [
            '<address>',
                '<strong>ООО «МультиПАК»</strong>',
            '</address>'
        ].join('')
    }, {
        preset: 'islands#brownDotIcon'
    });

    map.geoObjects.add(placemarkObj);
    });

    $('#print-btn').on('click', function() {
      var popup = window.open('/map.html', 'map', 'width=9000,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1');

      popup.print();
    });

})();
