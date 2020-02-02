$('.right-block__column').on('click', function (e) {
  e.preventDefault();
  $('.left-column').toggleClass('active');
  $('.right-column').toggleClass('active');
});