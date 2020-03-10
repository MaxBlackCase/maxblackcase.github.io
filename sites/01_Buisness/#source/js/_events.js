// ? <bgimage>
function ibg() {
  var c;
  $.each($(".ibg"), function(index, val) {
    c = $(this).find("img").length;
    if (c > 0) {
      $(this).css(
        "background-image",
        'url("' +
          $(this)
            .find("img")
            .attr("src") +
          '")'
      );
    }
  });
}
ibg();
// ? </bgimage>

// ? <headMenu>
$(".menu-header__icon").on("click", function(e) {
  $(this).toggleClass("active");
  $(".menu-header__menu").toggleClass("active");
  if ($(this).hasClass("active")) {
    $("body").data("scroll", $(window).scrollTop());
  }

  $("body").toggleClass("lock");
  if (!$(this).hasClass("active")) {
    $("body, html").scrollTop(parseInt($("body").data("scroll")));
  }
});
// ? </headMenu>

// ? <Tabs>
$('body').on('click','.tab__navitem',function(event) {
  var eq=$(this).index();
if($(this).hasClass('parent')){
  var eq=$(this).parent().index();
}
if(!$(this).hasClass('active')){
  $(this).closest('.tabs').find('.tab__navitem').removeClass('active');
  $(this).addClass('active');
  $(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
if($(this).closest('.tabs').find('.slick-slider').length>0){
  $(this).closest('.tabs').find('.slick-slider').slick('setPosition');
}
}
});
// ? </Tabs>
