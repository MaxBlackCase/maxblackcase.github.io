// Preloader 
$(window).on('load', function(){
       var $preloder = $('#preloader');
        $preloder.delay(100).fadeOut('slow');
    
    var h1 = $('#ops-block-one'),
        h2 = $('#ops-block-two'),
        h3 = $('#ops-block-three');
    
            h1.animate({
               opacity: 0,
               fontSize: '55px',
            },200, function(){
                h1.animate({
                    opacity: 1,
                    fontSize: '64px'
                },800);
            });
    
            h2.animate({
               opacity: 0,
            },400, function(){
                h2.animate({
                    opacity: 1,
                },1200);
            });
    
            h3.animate({
               opacity: 0,
            },600, function(){
                h3.animate({
                    opacity: 1,
                },1400);
            });
    
});
$(document).ready(function(){
    // Preloader
    $('.dws-progress-bar').circularProgress({
        color: '#F3B900',
        line_width: 5,
        percent: 0,
        starting_position: 50
        
    }).circularProgress('animate', 100, 1800);
    
    
    //carousel
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots:false,
        autoplay: false,
        autoplayTimeout: 3000,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
    });
    
    $('.nav-link').on('click', function(){
        if(window.innerWidth <=576){
        $('#myNavbar').collapse('hide');
        }               
    });
        
    //srolling
    $('a[data-target^="scrolling"]').bind('click.smoothscroll', function(){
        if(window.innerWidth <=768){
            var target = $(this).attr('href'), bl_top;
            bl_top = $(target).offset().top;
            $('body, html').animate({scrollTop: bl_top}, 1000);
            return false;
        }
        if(window.innerWidth > 578){
            var target = $(this).attr('href'), bl_top;
            bl_top = $(target).offset().top-150;
            $('body, html').animate({scrollTop: bl_top}, 1000);
            return false; 
        }
    });
    
    
    //mask-phone
    $(function(){
       $('#phone').mask('+7 (999) 999-99-99');
    });
    
    //colapse
    
        
    
    //Ajax myForm
    $('#form-block-seven').submit(function(e){
       e.preventDefault();
        $.ajax({
            type: 'POST',
            url: './ajax.php',
            data: $('#form-block-seven').serialize(),
            success: function(data){
                if(data === 'true'){
                    $('#submit').hide('400');
                    $('#submit').html();
                    $('#submit').delay(100);
                    $('#submit').show('400');
                    $('#submit').html('Отправлено');
                    }
            }
        });
    });
    
    //fixed header
    var header = $('#header');
    if(window.innerWidth <= 576){
        header.removeClass('sticky-top');
    }
//    header.removeAttr('sticky-top');
//    $(window).scroll(function(){
//       if(window.innerWidth > 576){
//           header.addClass('fixed-top').fadeIn('fast');
//           header.css('background-color','#FFF');
//       } else{
//           header.removeClass('sticky-top').fadeIn('fast');
//       }
//    });

    
    // Content price
    var modal_title,modal_img,modal_price_content, modal_price_rubl;
    $('.services #btn-service-1').click(function(){
        var title = $('.block-three #h-1').html(),
            content = $('#content-price-1').html(),
            rubl = $('#rubl-price-1').html();
            modal_title = $('.modal-content h2').text(title);
            modal_img =  $('#img-price').html('<img class="rounded-circle" src="media/images/img_block-three/1.png" alt="img-price" width="250" />');
            modal_price_content = $('#content-price').html(content);
            modal_price_rubl = $('#rubl-price').html(rubl);
        $('#myModal').modal();
          
    });
    $('.services #btn-service-2').click(function(){
        var title = $('.block-three #h-2').html(),
            content = $('#content-price-2').html(),
            rubl = $('#rubl-price-2').html();
            modal_title = $('.modal-content h2').text(title);
            modal_img =  $('#img-price').html('<img class="rounded-circle" src="media/images/img_block-three/2.png" alt="img-price" width="250" />');
            modal_price_content = $('#content-price').html(content);
            modal_price_rubl = $('#rubl-price').html(rubl);
        $('#myModal').modal();
          
    });
    $('.services #btn-service-3').click(function(){
        var title = $('.block-three #h-3').html(),
            content = $('#content-price-3').html(),
            rubl = $('#rubl-price-3').html();
            modal_title = $('.modal-content h2').text(title);
            modal_img =  $('#img-price').html('<img class="rounded-circle" src="media/images/img_block-three/3.png" alt="img-price" width="250" />');
            modal_price_content = $('#content-price').html(content);
            modal_price_rubl = $('#rubl-price').html(rubl);
        $('#myModal').modal();
          
    });
    $('.services #btn-service-4').click(function(){
        var title = $('.block-three #h-4').html(),
            content = $('#content-price-4').html(),
            rubl = $('#rubl-price-4').html();
            modal_title = $('.modal-content h2').text(title);
            modal_img =  $('#img-price').html('<img class="rounded-circle" src="media/images/img_block-three/4.png" alt="img-price" width="250" />');
            modal_price_content = $('#content-price').html(content);
            modal_price_rubl = $('#rubl-price').html(rubl);
        $('#myModal').modal();
          
    });
    $('.services #btn-service-5').click(function(){
        var title = $('.block-three #h-5').html(),
            content = $('#content-price-5').html(),
            rubl = $('#rubl-price-5').html();
            modal_title = $('.modal-content h2').text(title);
            modal_img =  $('#img-price').html('<img class="rounded-circle" src="media/images/img_block-three/5.png" alt="img-price" width="250" />');
            modal_price_content = $('#content-price').html(content);
            modal_price_rubl = $('#rubl-price').html(rubl);
        $('#myModal').modal();
          
    });
    $('.services #btn-service-6').click(function(){
        var title = $('.block-three #h-6').html(),
            content = $('#content-price-6').html(),
            rubl = $('#rubl-price-6').html();
            modal_title = $('.modal-content h2').text(title);
            modal_img =  $('#img-price').html('<img class="rounded-circle" src="media/images/img_block-three/6.png" alt="img-price" width="250" />');
            modal_price_content = $('#content-price').html(content);
            modal_price_rubl = $('#rubl-price').html(rubl);
        $('#myModal').modal();
          
    });
    $('.services #btn-service-7').click(function(){
        var title = $('.block-three #h-7').html(),
            content = $('#content-price-7').html(),
            rubl = $('#rubl-price-7').html();
            modal_title = $('.modal-content h2').text(title);
            modal_img =  $('#img-price').html('<img class="rounded-circle" src="media/images/img_block-three/7.png" alt="img-price" width="250" />');
            modal_price_content = $('#content-price').html(content);
            modal_price_rubl = $('#rubl-price').html(rubl);
        $('#myModal').modal();
          
    });
    $('.services #btn-service-8').click(function(){
        var title = $('.block-three #h-8').html(),
            content = $('#content-price-8').html(),
            rubl = $('#rubl-price-8').html();
            modal_title = $('.modal-content h2').text(title);
            modal_img =  $('#img-price').html('<img class="rounded-circle" src="media/images/img_block-three/8.png" alt="img-price" width="250" />');
            modal_price_content = $('#content-price').html(content);
            modal_price_rubl = $('#rubl-price').html(rubl);
        $('#myModal').modal();
          
    });
    $('.services #btn-service-9').click(function(){
        var title = $('.block-three #h-9').html(),
            content = $('#content-price-9').html(),
            rubl = $('#rubl-price-9').html();
            modal_title = $('.modal-content h2').text(title);
            modal_img =  $('#img-price').html('<img class="rounded-circle" src="media/images/img_block-three/9.png" alt="img-price" width="250" />');
            modal_price_content = $('#content-price').html(content);
            modal_price_rubl = $('#rubl-price').html(rubl);
        $('#myModal').modal();
          
    });
    
    //Closed modal window
    $('.modal-content .btn').click(function(){
       $('#myModal').modal('hide');

    });
    
});





