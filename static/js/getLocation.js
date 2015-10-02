function getLocation() {
	var x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
        	showPosition,
        	positionError,
        	{
        		timeout: 0,
        		enableHighAccuracy: true,
        		maximumAge: Infinity
        	}
        	);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
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
}

setInterval(getLocation(), 500);