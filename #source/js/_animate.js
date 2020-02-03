$('.right-block__column').on('click', function (e) {
  e.preventDefault();
  $('.left-column').toggleClass('active');
  $('.right-column').toggleClass('active');
  $('.close').addClass('active');
});

$('.close').on('click', function (e) {
  e.preventDefault();
  $('.left-column').removeClass('active');
  $('.right-column').removeClass('active');
  $('.close').removeClass('active');
});