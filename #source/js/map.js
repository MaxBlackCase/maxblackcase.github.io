

$('a[data-target="contacts"]').on('click', function () {
  if (!$('.contacts-content__map').hasClass('active')) {
    ymaps.load(init);
    $('.contacts-content__map').addClass('active');
    $('.contacts-content__map > #map').fadeIn('fast');
  }
});

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [53.5088, 49.41918],
    zoom: 9
  });
  myMap.behaviors.disable(["rightMouseButtonMagnifier",'scrollZoom','drag']);
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
