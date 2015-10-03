function updateMap() {
	var x = document.getElementById("demo");
	
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
        	successUpdate,  
        	errorCallback_highAccuracy,      	
        	{
        		timeout: 10000,
        		enableHighAccuracy: true,
        		maximumAge: Infinity
        	}
        	);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

   
}

function successUpdate(position){
	L.mapbox.accessToken = 'pk.eyJ1IjoiZGFuaWVsYmV0dGVyaWRnZSIsImEiOiJjaWY3bjZqazcwc3IzczdrcmU1NjJ1czdnIn0.Xr0sZHMxs6Fvp7lzmmtJSg';
	var map = L.mapbox.map('map', 'mapbox.streets').setView([position.coords.latitude, position.coords.longitude], 22);


	L.mapbox.featureLayer({
    // this feature is in the GeoJSON format: see geojson.org
    // for the full specification
    type: 'Feature',
    geometry: {
        type: 'Point',
        // coordinates here are in longitude, latitude order because
        // x, y is the standard for GeoJSON and many formats
        coordinates: [
          position.coords.longitude,
          position.coords.latitude 
        ]
    }
    
	}).addTo(map);
	var x = document.getElementById("demo");
	x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude
    + 
    "<br>accuracy: " + position.coords.accuracy
    + 
    "<br>altitude: " + position.coords.altitude
    + 
    "<br>heading: " + position.coords.heading
    + 
    "<br>speed: " + position.coords.speed;
};

setInterval(updateMap(), 1000);