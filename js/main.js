$(document).ready(function(){function e(t,e){$(".popup").removeClass("active").hide(),$(".header-menu").hasClass("active")||$("body").data("scroll",$(window).scrollTop()),i.any()?setTimeout(function(){$("body").addClass("lock")},300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+t),""!=e&&null!=e&&$(".popup-"+t+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+e+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+t).fadeIn(300).delay(300).addClass("active"),0<$(".popup-"+t).find(".slick-slider").length&&$(".popup-"+t).find(".slick-slider").slick("setPosition")}function o(){$(".popup").removeClass("active").fadeOut(300),$(".header-menu").hasClass("active")||(i.any()?($("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))):(setTimeout(function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})},200),setTimeout(function(){$("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))},200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}var i={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return i.Android()||i.BlackBerry()||i.iOS()||i.Opera()||i.Windows()}};if(i.any(),location.hash){var t=location.hash.replace("#","");0<$(".popup-"+t).length?e(t):0<$("div."+t).length&&$("body,html").animate({scrollTop:$("div."+t).offset().top},500,function(){})}$(".wrapper").addClass("loaded");var s,a,n;if(i.iOS());$(".menu-header__icon").click(function(t){$(this).toggleClass("active"),$(".menu-header__menu").toggleClass("active"),$(this).hasClass("active")&&$("body").data("scroll",$(window).scrollTop()),$("body").toggleClass("lock"),$(this).hasClass("active")||$("body,html").scrollTop(parseInt($("body").data("scroll")))}),0<$(".gallery").length&&baguetteBox.run(".gallery",{}),$(".pl").click(function(t){return e($(this).attr("href").replace("#",""),$(this).data("vid")),!1}),$(".popup-close,.popup__close").click(function(t){return o(),!1}),$(".popup").click(function(t){if(!$(t.target).is(".popup>.popup-table>.cell *")||$(t.target).is(".popup-close")||$(t.target).is(".popup__close"))return o(),!1}),$(document).on("keydown",function(t){27==t.which&&o()}),$(".goto").click(function(){var t=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+t).offset().top+0},500,function(){}),$(".header-menu").hasClass("active")&&($(".header-menu,.header-menu__icon").removeClass("active"),$("body").removeClass("lock")),!1}),$.each($(".ibg"),function(t,e){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}),$(document).on("click touchstart",function(t){$(t.target).is(".select *")||$(".select").removeClass("active")}),$(window).scroll(function(){$(window).width();50<$(window).scrollTop()?$("#up").fadeIn(300):$("#up").fadeOut(300)}),$("#up").click(function(t){$("body,html").animate({scrollTop:0},300)}),$("body").on("click",".tab__navitem",function(t){var e=$(this).index();if($(this).hasClass("parent"))e=$(this).parent().index();$(this).hasClass("active")||($(this).closest(".tabs").find(".tab__navitem").removeClass("active"),$(this).addClass("active"),$(this).closest(".tabs").find(".tab__item").removeClass("active").eq(e).addClass("active"),0<$(this).closest(".tabs").find(".slick-slider").length&&$(this).closest(".tabs").find(".slick-slider").slick("setPosition"))}),$.each($(".spoller.active"),function(t,e){$(this).next().show()}),$("body").on("click",".spoller",function(t){return $(this).hasClass("mob")&&!i.any()||($(this).hasClass("closeall")&&!$(this).hasClass("active")&&$.each($(this).closest(".spollers").find(".spoller"),function(t,e){$(this).removeClass("active"),$(this).next().slideUp(300)}),$(this).toggleClass("active").next().slideToggle(300,function(t,e){0<$(this).parent().find(".slick-slider").length&&$(this).parent().find(".slick-slider").slick("setPosition")})),!1}),-1!=navigator.appVersion.indexOf("Mac")||0<$(".scroll-body").length&&$(".scroll-body").niceScroll(".scroll-list",(s=100,n=!(a=50),i.any()&&(s=10,a=1,n=!0),{cursorcolor:"#fff",cursorwidth:"4px",background:"",autohidemode:!0,cursoropacitymax:.4,bouncescroll:n,cursorborderradius:"0px",scrollspeed:s,mousescrollstep:a,directionlockdeadzone:0,cursorborder:"0px solid #fff"})),0<$(".t,.tip").length&&$(".t,.tip").webuiPopover({placement:"top",trigger:"hover",backdrop:!1,animation:"fade",dismissible:!0,padding:!1,onShow:function(t){},onHide:function(t){}}).on("show.webui.popover hide.webui.popover",function(t){$(this).toggleClass("active")})});