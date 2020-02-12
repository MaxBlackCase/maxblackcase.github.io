// * key: AIzaSyBtWEMsi-xvxXgnSlRn32KMnzOY1NYggzc

function initMap() {
  var cord = { lat: 53.507947, lng: 49.421353 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: cord
  });
  
  var marker = new google.maps.Marker({ position: cord, map: map });
}
