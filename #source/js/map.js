ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [53.5088, 49.41918],
    zoom: 9
  });
  myMap.behaviors.disable(["rightMouseButtonMagnifier"]);
  myMap.controls.remove("zoomControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("geolocationControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("fullscreenControl");
  myMap.controls.remove("rulerControl");
  var myMarker = new ymaps.Placemark(
    myMap.getCenter(),
    {
      hintContent: "myPlacemark",
      balloonContent: "Тольятти"
    },
    {
      iconLayout: "default#image",
      iconImageHref: "../img/contacts/icon/01.png",
      iconImageSize: [32, 32],
      iconImageOffset: [-20, -50]
    }
  );
  myMap.geoObjects.add(myMarker);
}
