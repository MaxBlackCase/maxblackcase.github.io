var counter = 0;

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
  $(".contacts-content__map").removeClass("active");
  $(".contacts-content__map > #map").fadeOut("slow", function() {
    $("#map").html(" ");
  });
});

// ? <easyPieChart>
var elem = $(".skills-resume");
$(".resume-content, .resume").scroll(function() {
  var scroll = $(this).scrollTop() + $(this).height();
  var offset = elem.offset().top + elem.height();
  if (scroll > offset && counter == 0) {
    $(".chart").easyPieChart({
      barColor: "#0080ff",
      trackColor: "rgba(0, 128, 255, .2)",
      scaleLength: 0,
      animate: {
        duration: 2500,
        enabled: true
      }
    });
    counter = 1;
  }
});
// * </easyPieChart>

// * <TABS>
function tabsShow(item, itemClass, tabClass) {
  $(".tabs > .portfolio-main__tab").each(function(i, val) {
    var tab = $("[data-target=" + item + "]");
    var attrTab = tab.attr("data-target");
    tab.addClass("active");
    if (attrTab == "all") {
      $(tabClass).addClass("active");
    }
    var value = $(val).hasClass("active");
    if (value) {
      $(val)
        .show()
        .animate(
          {
            opacity: 1
          },
          700,
          "linear"
        );
    } else {
      $(val).animate(
        {
          opacity: 0
        },
        600,
        "linear",
        () => {
          $(this).css("display", "none");
        }
      );
    }
  });
}
var itemClass = $(".portfolio-body__item");
var tabClass = $(".portfolio-main__tab");
tabClass.addClass("active");
$(itemClass).on("click", function(e) {
  e.preventDefault();
  var item = $(this).attr("data-target");
  $(itemClass).removeClass("active");
  $(tabClass).removeClass("active");
  $(this).addClass("active");
  tabsShow(item, itemClass, tabClass);
});
// * </TABS>

// * <XHR>
// function sendRequest(method, url, body = null) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url)
//     xhr.responseType = "json"
//     xhr.setRequestHeader('Content-Type', 'application/json')
//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };
//     xhr.onerror = () => {
//       reject("object", xhr.response);
//     };

//     xhr.send(JSON.stringify(body));
//   });
// }

// const body = {
//   name: 'Vladilen',
//   age: 26
// }

// sendRequest("POST", requestURL, body)
// .then(data => console.log('object', data))
// .catch(err => console.log('object', err))
// * </XHR>

// * <MAIL>
const requestURL = 'http://maxblackcase.rf.gd/index/php'
var form = $('#formMail')
$(form).on('submit', function (e) {
  e.preventDefault()
  $.ajax({
    type: "POST",
    url: requestURL,
    data: $(this).serialize(),
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    dataType: "html",
    success: function (result) {
      console.log('result:', result)
      $('.contacts-content__submit').html('')
      $('.contacts-content__submit').fadeIn('slow', function () {$(this).html('отправлено').css('color','green')})
    }
  })
})
// * </MAIL>
