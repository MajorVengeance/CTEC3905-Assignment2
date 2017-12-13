var markers = [];
var date = new Date();
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
  
  if(vanillacalendar.picked == null || vanillacalendar.picked == this.date.getTime()){
	  
  }
  else{
	  //use dates in JSON crap
  }
  
  for(i in obj.TestData){
    var latLng = new google.maps.LatLng(obj.TestData[i].lat, obj.TestData[i].lng);
    addMarker(latLng);
  }
}

function codeAddress(address){
  geocoder.geocode( {'address': address}, function(results, status) {
    if(status == 'OK'){
        addMarker(results[0].geometry.location);
		return true;
    } else{
      alert('Geocode was not successful for the following reason: ' + status);
	  return false;
    }
  });
}

function makeBooking(){
	var address = "";
	var x = document.forms["bookQuote"]["name"].value;
	if(x == ""){
		alert("Name must be filled out");
		return false;
	}
	
	x = document.forms["bookQuote"]["add1"].value;
	if(x == ""){
		alert("Address Line 1 must be filled out");
		return false;
	}
	address += x;
	
	x = document.forms["bookQuote"]["add2"].value;
	if(x !== ""){
		address += ", " + x;
	}
	
	x = document.forms["bookQuote"]["city"].value;
	if(x == ""){
		alert("City must be filled out");
		return false;
	}
	address += ", " + x;
	
	x = document.forms["bookQuote"]["postcode"].value;
	if(x == ""){
		alert("Postcode must be filled out");
		return false;
	}
	else if(!validatePostcode(x)){
			return false;
	}
	address += ", " + x;
	
	if(!codeAddress(address)){
		return false;
	}
	
	var form = document.getElementsByName('bookQuote');
	form[0].submit();
}

function validatePostcode(postcode){
	postcode = postcode.replace(/\s/g, "");
	var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
	return regex.test(postcode);
}