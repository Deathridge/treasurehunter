function getLocation() {
	var x = document.getElementById("demo");
	
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
        	successCallback,  
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

function errorCallback_highAccuracy(position) {
	var x = document.getElementById("demo");
    if (error.code == error.TIMEOUT)
    {
        // Attempt to get GPS loc timed out after 5 seconds, 
        // try low accuracy location
       x.innerHTML = "attempting to get low accuracy location";
        navigator.geolocation.watchPosition(
               successCallback, 
               errorCallback_lowAccuracy,
               {maximumAge:600000, timeout:10000, enableHighAccuracy: false});
        return;
    }
    
    var msg = "<p>Can't get your location (high accuracy attempt). Error = ";
    if (error.code == 1)
        msg += "PERMISSION_DENIED";
    else if (error.code == 2)
        msg += "POSITION_UNAVAILABLE";
    msg += ", msg = "+error.message;
    
   x.innerHTML = msg;
}

function errorCallback_lowAccuracy(position) {
	var x = document.getElementById("demo");
    var msg = "<p>Can't get your location (low accuracy attempt). Error = ";
    if (error.code == 1)
        msg += "PERMISSION_DENIED";
    else if (error.code == 2)
        msg += "POSITION_UNAVAILABLE";
    else if (error.code == 3)
        msg += "TIMEOUT";
    msg += ", msg = "+error.message;
    
    x.innerHTML = msg;
}

function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
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




getLocation();