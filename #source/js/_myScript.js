$(".right-block__column").on("click", function(e) {
  e.preventDefault();

  var targetItem = $(this).attr("data-target");

  $(".content").each(function(index, val) {
    $(".content__row").removeClass("active");

    if ($(".content__row").hasClass(targetItem)) {
      // * Content
      $(".close").addClass("active");
      $("." + targetItem).addClass("active");

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
    $(".content__row").removeClass("active");
  });

  $(".left-column").removeClass("active");
  $(".right-column").removeClass("active");
  $(".close").removeClass("active");
  $(".wrapper__row").removeClass("active");
});

$(".chart").easyPieChart({
  barColor: "#0080ff",
  trackColor: "rgba(0, 128, 255, .2)",
  scaleColor: "rgba(0, 128, 255, .6)",
  scaleLength: 8,
  animate: {
    duration: 2000,
    enabled: true
  }
});

