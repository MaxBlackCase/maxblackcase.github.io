// * <PRELOADER>

function preloader() {
  let p = $(".preloader");
  p.fadeOut(800);
}
setInterval(() => {
  preloader();
}, 3000);
// * </PRELOADER>
