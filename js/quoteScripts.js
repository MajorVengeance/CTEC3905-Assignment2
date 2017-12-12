var markers = [];
var map;
var geocoder;

function initPage(){
  vanillacalendar.init();
  initMap();
}

function initMap(){
  var cambridge = {lat: 52.205318, lng: 0.121864};
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: cambridge
  });

  loadFromJSON();
}

function addMarker(latLng){
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  markers.push(marker);
}

function clearMarkers(){
  setMapOnAll(null);
}

function setMapOnAll(map){
  for(var i=0; i< markers.length; i++){
    markers[i].setMap(map);
  }
}

function deleteMarkers(){
  clearMarkers();
  markers = [];
}

function showMarkers(){
  setMaponAll(map);
}

function loadFromJSON(){
  let obj = JSON.parse(mapLatLng);
  for(i in obj.Test){
    var latLng = new google.maps.LatLng(obj.Test[i].lat, obj.Test[i].lng);
    addMarker(latLng);
  }
}

function codeAddress(address){
  geocoder.geocode( {'address': address}, function(results, stauts) {
    if(status == 'OK'){
        addMarker(results[0].geometry.location);
    } else{
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function makeBooking(){

}