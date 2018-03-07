function myMap()
{
  myCenter=new google.maps.LatLng(28.530263, 77.272730);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.TERRAIN 
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
    icon: "images/maplogo.ico",
    animation: google.maps.Animation.BOUNCE
  });
  marker.setMap(map);



}


// for the multiple markers
//
// $(document).ready(function () {
//     var map;
//     var elevator;
//     var myOptions = {
//         zoom: 1,
//         center: new google.maps.LatLng(0, 0),
//         mapTypeId: 'terrain'
//     };
//     map = new google.maps.Map($('#googleMap')[0], myOptions);
//
//     var addresses = ['Norway', 'Africa', 'Asia','North America','South America'];
//
//     for (var x = 0; x < addresses.length; x++) {
//         $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
//             var p = data.results[0].geometry.location
//             var latlng = new google.maps.LatLng(p.lat, p.lng);
//             new google.maps.Marker({
//                 position: latlng,
//                 map: map
//             });
//
//         });
//     }
//
// });
