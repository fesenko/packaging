window.onload = function () {
    YMaps.jQuery(function() {
        var map = new YMaps.Map(YMaps.jQuery("#map")[0]);
        map.setCenter(new YMaps.GeoPoint(37.702749, 55.717862), 15);

        var placemarkObj = new YMaps.Placemark(map.getCenter());
        placemarkObj.name = 'ООО «МультиПАК»';
        map.addOverlay(placemarkObj);
        placemarkObj.openBalloon();
    });

    $('#print-btn').on('click', function() {
      var popup = window.open('/map.html', 'map', 'width=9000,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1');

      popup.print();
    });
};
