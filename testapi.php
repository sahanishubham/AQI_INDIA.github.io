<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="http://maps.google.com/maps/api/js?key=AIzaSyBcb8twJqzWNDvZEtZeNvp4TaMoAjo0ksQ"type="text/javascript"></script>
  </head>
  <body>
    <div id="map" style="width:100%;height:700px;"></div>
  </body>
  <script>
  var tokenvalue=document.cookie;
  var MyData;
  var m;
  $.ajax({
      url: 'http://aqi.in/AppAPI/api/protected/getAllLocations',
      headers: {
          'Authorization':'Bearer '+tokenvalue,
          'Content-Type':'application/json',
          'Accept':'application/json'
      },
      method: 'GET',
      dataType: 'json',
      data: MyData,
      success: function(data){

    for(key in data) {
      if(data.hasOwnProperty(key)) {
      var value = data[key];
      var i=0;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(28.704059,77.102490),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var infowindow = new google.maps.InfoWindow();

      var marker, i;

      for (i = 0; i<4; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(value[i]['lat'], value[i]['lon']),
          map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(value[i]['cityName']);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    }
  }
}
  });
  </script>
</html>
