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

var elem = $(".skills-resume");
$counter = 0;
$(".resume-content").scroll(function() {
  var scroll = $(this).scrollTop() + $(this).height();
  var offset = elem.offset().top + elem.height();
  if (scroll > offset && $counter == 0) {
    console.log("Hi", "Hi");
    $(".chart").easyPieChart({
      barColor: "#0080ff",
      trackColor: "rgba(0, 128, 255, .2)",
      scaleColor: "rgba(0, 128, 255, .6)",
      scaleLength: 8,
      animate: {
        duration: 2500,
        enabled: true
      }
    });
    $counter = 1;
  }
});

// ? <TABS>
function tabsShow(item, itemClass, tabClass) {
  $(".tabs > a").each(function(i, val) {
    var tab = $("[data-target=" + item + "]");
    var attrTab = tab.attr("data-target");
    tab.addClass("active");
    if(attrTab == 'all'){
      $(tabClass).addClass('active');
    }
    var value = $(val).hasClass('active');
    if (value) {
      $(val).show().animate({
        opacity: 1,
      }, 700, 'linear');
    }else{
      $(val).animate({
        opacity: 0,
      },600, 'linear',()=>{
        $(this).css('display', 'none');
      });
    }
  });
}
var itemClass = $(".portfolio-body__item");
var tabClass = $(".portfolio-main__tab");
tabClass.addClass('active');
$(itemClass).on("click", function(e) {
  e.preventDefault();
  var item = $(this).attr("data-target");
  $(itemClass).removeClass("active");
  $(tabClass).removeClass('active');
  $(this).addClass("active");
  tabsShow(item, itemClass, tabClass);
  
});
// ? </TABS>
