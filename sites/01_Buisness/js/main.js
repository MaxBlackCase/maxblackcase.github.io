$(document).ready(function(){function t(e,t){$(".popup").removeClass("active").hide(),$(".header-menu").hasClass("active")||$("body").data("scroll",$(window).scrollTop()),i.any()?setTimeout(function(){$("body").addClass("lock")},300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+e),""!=t&&null!=t&&$(".popup-"+e+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+t+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+e).fadeIn(300).delay(300).addClass("active"),0<$(".popup-"+e).find(".slick-slider").length&&$(".popup-"+e).find(".slick-slider").slick("setPosition")}function o(){$(".popup").removeClass("active").fadeOut(300),$(".header-menu").hasClass("active")||(i.any()?($("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))):(setTimeout(function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})},200),setTimeout(function(){$("body").removeClass("lock"),$("body,html").scrollTop(parseInt($("body").data("scroll")))},200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}0<$("#map").length&&function(e){google.maps.Map.prototype.setCenterWithOffset=function(o,i,s){var a=this,e=new google.maps.OverlayView;e.onAdd=function(){var e=this.getProjection(),t=e.fromLatLngToContainerPixel(o);t.x=t.x+i,t.y=t.y+s,a.panTo(e.fromContainerPixelToLatLng(t))},e.draw=function(){},e.setMap(this)};for(var s=new Array,a=new google.maps.InfoWindow({}),t=[[new google.maps.LatLng(64.568333,17.155501)],[new google.maps.LatLng(43.078168,12.880249)],[new google.maps.LatLng(50.965139,10.319059)],[new google.maps.LatLng(53.859055,27.5013694)]],o={zoom:3,panControl:!1,mapTypeControl:!1,center:t[0][0],styles:[{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#e0efef"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{hue:"#1900ff"},{color:"#c0e8e8"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"on"},{lightness:700}]},{featureType:"water",elementType:"all",stylers:[{color:"#7dcdcd"}]}],scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP},n=new google.maps.Map(document.getElementById("map"),o),l={url:"img/icons/map.svg",scaledSize:new google.maps.Size(24,29),anchor:new google.maps.Point(12,15)},i=0;i<t.length;i++){var r=new google.maps.Marker({icon:l,position:t[i][0],map:n});google.maps.event.addListener(r,"click",function(o,i){return function(){for(var e=0;e<s.length;e++)s[e].setIcon(l);var t=i+1;a.setContent($(".contacts-map-item_"+t).html()),a.open(n,o),o.setIcon(l),n.setCenterWithOffset(o.getPosition(),0,0),setTimeout(function(){$(".gm-style-iw").parent().addClass("baloon"),$(".gm-style-iw").prev().addClass("baloon-style"),$(".gm-style-iw").next().addClass("baloon-close"),$(".gm-style-iw").addClass("baloon-content")},10)}}(r,i)),s.push(r)}if(e){var c=e-1;setTimeout(function(){google.maps.event.trigger(s[c],"click")},500)}}(1);var i={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return i.Android()||i.BlackBerry()||i.iOS()||i.Opera()||i.Windows()}};if(i.any(),location.hash){var e=location.hash.replace("#","");0<$(".popup-"+e).length?t(e):0<$("div."+e).length&&$("body,html").animate({scrollTop:$("div."+e).offset().top},500,function(){})}$(".wrapper").addClass("loaded");var s,a,n;if(i.iOS());$(".menu-header__icon").click(function(e){$(this).toggleClass("active"),$(".menu-header__menu").toggleClass("active"),$(this).hasClass("active")&&$("body").data("scroll",$(window).scrollTop()),$("body").toggleClass("lock"),$(this).hasClass("active")||$("body,html").scrollTop(parseInt($("body").data("scroll")))}),0<$(".gallery").length&&baguetteBox.run(".gallery",{}),$(".pl").click(function(e){return t($(this).attr("href").replace("#",""),$(this).data("vid")),!1}),$(".popup-close,.popup__close").click(function(e){return o(),!1}),$(".popup").click(function(e){if(!$(e.target).is(".popup>.popup-table>.cell *")||$(e.target).is(".popup-close")||$(e.target).is(".popup__close"))return o(),!1}),$(document).on("keydown",function(e){27==e.which&&o()}),$(".goto").click(function(){var e=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+e).offset().top+0},500,function(){}),$(".header-menu").hasClass("active")&&($(".header-menu,.header-menu__icon").removeClass("active"),$("body").removeClass("lock")),!1}),$.each($(".ibg"),function(e,t){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}),$(document).on("click touchstart",function(e){$(e.target).is(".select *")||$(".select").removeClass("active")}),$(window).scroll(function(){$(window).width();50<$(window).scrollTop()?$("#up").fadeIn(300):$("#up").fadeOut(300)}),$("#up").click(function(e){$("body,html").animate({scrollTop:0},300)}),$("body").on("click",".tab__navitem",function(e){var t=$(this).index();if($(this).hasClass("parent"))t=$(this).parent().index();$(this).hasClass("active")||($(this).closest(".tabs").find(".tab__navitem").removeClass("active"),$(this).addClass("active"),$(this).closest(".tabs").find(".tab__item").removeClass("active").eq(t).addClass("active"),0<$(this).closest(".tabs").find(".slick-slider").length&&$(this).closest(".tabs").find(".slick-slider").slick("setPosition"))}),$.each($(".spoller.active"),function(e,t){$(this).next().show()}),$("body").on("click",".spoller",function(e){return $(this).hasClass("mob")&&!i.any()||($(this).hasClass("closeall")&&!$(this).hasClass("active")&&$.each($(this).closest(".spollers").find(".spoller"),function(e,t){$(this).removeClass("active"),$(this).next().slideUp(300)}),$(this).toggleClass("active").next().slideToggle(300,function(e,t){0<$(this).parent().find(".slick-slider").length&&$(this).parent().find(".slick-slider").slick("setPosition")})),!1}),-1!=navigator.appVersion.indexOf("Mac")||0<$(".scroll-body").length&&$(".scroll-body").niceScroll(".scroll-list",(s=100,n=!(a=50),i.any()&&(s=10,a=1,n=!0),{cursorcolor:"#fff",cursorwidth:"4px",background:"",autohidemode:!0,cursoropacitymax:.4,bouncescroll:n,cursorborderradius:"0px",scrollspeed:s,mousescrollstep:a,directionlockdeadzone:0,cursorborder:"0px solid #fff"})),0<$(".t,.tip").length&&$(".t,.tip").webuiPopover({placement:"top",trigger:"hover",backdrop:!1,animation:"fade",dismissible:!0,padding:!1,onShow:function(e){},onHide:function(e){}}).on("show.webui.popover hide.webui.popover",function(e){$(this).toggleClass("active")})});