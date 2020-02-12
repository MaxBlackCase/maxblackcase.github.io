// * <PRELOADER>
$(".wrapper__row").ready(function() {
  preloader();
});
function preloader() {
  setInterval(() => {
    let p = $(".preloader");
    p.fadeOut(600);
  }, 3000);
}
// * </PRELOADER>
