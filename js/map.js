	var points = [
	    ['Iowa State Capitol', 19.075984, 72.877656, 12, '<strong>Iowa State Capitol</strong><br>This is text', 'D'],
	    ['State Historical Museum', 41.590626, -93.609046, 11, '<strong>State Historical Museum</strong><br>This is text', 'B'],
	    ['Brenton Skating Plaza', 41.589778, -93.616477, 10, '<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
			['Arunachal Pradesh', 28.217999, 94.727753, 13,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Manipur', 24.663717, 93.906269, 14,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Tripura', 23.940848, 91.988153, 15,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Bengaluru', 12.971599, 77.594563, 16,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Lucknow', 26.846694, 80.946166, 17,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Punjab', 31.147130, 75.341218, 18,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Rajasthan', 27.023804, 74.217933, 19,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Himachal Pradesh', 31.104829, 77.173390, 20,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Jammu and Kashmir', 33.778175, 76.576171, 21,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Kerla', 10.850516, 76.271083, 22,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Ahmedabad', 23.022505, 72.571362, 23,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Mumbai', 19.075984, 72.877656, 24,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Hydrabad',17.385044, 78.486671, 25,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Odisha', 20.951666, 85.098524, 26,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C'],
		  ['Kolkata',22.572646, 88.363895, 27,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C']
			['Chindwara',22.057437, 78.938173, 28,'<strong>Brenton Skating Plaza</strong><br>This is text', 'C']
	];

	function setMarkers(map, locations) {

	    for (var i = 0; i < locations.length; i++) {
	        var place = locations[i];
	        var myLatLng = new google.maps.LatLng(place[1], place[2]);

	        var marker = new google.maps.Marker({
	            position: myLatLng,
	            map: map,
	            title: place[0],
	            // icon: "https://maps.google.com/mapfiles/marker" + place[5] + ".png",
							icon: "img/aqi.ico",
	            zIndex: place[3]
	        });

	        function addInfoWindow(marker, message) {
	            var infoWindow = new google.maps.InfoWindow({
	                content: message
	            });
	            google.maps.event.addListener(marker, 'click', function() {
	                infoWindow.open(map, marker);
	            });
	        }
	        addInfoWindow(marker, place[4]);
	    }
	}

	function initialize() {

	    var myOptions = {
	        center: new google.maps.LatLng(21.278657,81.866144),
	        zoom: 5,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	    setMarkers(map, points);
	}

	$(document).ready(function() {
	    initialize();
	});
