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
      center: new google.maps.LatLng(28.619988,77.292355),
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
          infowindow.setContent(value[i]['cityName'],value[i]['sensorValue']);
          console.log(value[i]['sensorValue']);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }
}
}
});
