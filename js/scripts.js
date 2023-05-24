$(function() {
    var map = new google.maps.Map($('.map-canvas')[0], {
        zoom: 16,
        center: new google.maps.LatLng(-37.87668864018493, 145.14838594485292)
    });
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(-37.87668864018493, 145.14838594485292)
    });
    var info = new SnazzyInfoWindow({
        marker: marker,
        content: 'Your Hinoak content.'
    });
    info.open();
});