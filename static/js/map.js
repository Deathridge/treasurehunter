var coor = getLocation();
var latitude = coor.latitude;
var longitude = coor.longitude;

function updateMap(){
L.mapbox.accessToken = 'danielbetteridge.cif7n6i1q0sptsolzat1vewt9';
var map = L.mapbox.map('map', 'mapbox.streets').setView([latitude, longitude], 9);
};

window.onload = updateMap;