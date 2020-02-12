// * <PRELOADER>

function preloader() {
  $(() => {
    setInterval(() => {

      let p = $(".preloader");
      p.fadeOut(1500);;

    }, 1500);
  });
}

$(document).ready(function () {
  preloader();
});
// * </PRELOADER>
