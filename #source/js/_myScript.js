$(".right-block__column").on("click", function(e) {
  e.preventDefault();

  var targetItem = $(this).attr("data-target");
  var targetTab = $(".content__row").attr("data-target");

  $(".content").each(function(index, val) {
    $(".content__row").removeClass("active");
    if (targetItem == targetTab) {

      // * Content
      $(".close").addClass("active");
      $(".content__row").addClass("active");

      // * Menu
      $(".left-column").addClass("active");
      $(".right-column").addClass("active");
      $(".wrapper__row").addClass("active");
    }
  });
});

$(".close").on("click", function(e) {
  e.preventDefault();

  $(".content").each(function(index, val) {
    $('.content__row').removeClass("active");
  });

  $(".left-column").removeClass("active");
  $(".right-column").removeClass("active");
  $(".close").removeClass("active");
  $(".wrapper__row").removeClass("active");
});
