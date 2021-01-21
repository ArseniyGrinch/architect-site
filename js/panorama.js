$(document).ready(function(){ 
   //sidebar-click
   $('.sidebar__btn').click(function() {
      //double click block
      $(this).prop('disabled', true);
      setTimeout(function() {
         $(this).prop('disabled', false);
      }.bind(this), 1800);
      //animation sidebar  
      $('.sidebar').toggleClass('sidebar__active');

      if($('.sidebar').hasClass('sidebar__active')) {
         $('.sidebar__title').css('display', 'none');
      } else {
         setTimeout(function(){
            $('.sidebar__title').css('display', 'flex');
         }, 1500);
      }
      
      if ($('.sidebar__arrow').css( "transform" ) == 'none'){
         $('.sidebar__arrow').css("transform","rotate(180deg)");
      } else {
         $('.sidebar__arrow').css("transform","" );
      }

      setTimeout(function(){
         $('.panorama__arrow-prev').fadeToggle();
      }, 300);

      if($('.sidebar').hasClass('sidebar__active')) {
         $('.rubrics-left__wrap').fadeOut();
         $('.rubrics__wrap-right').fadeOut();
      } else {
         setTimeout(function(){
            $('.rubrics-left__wrap').fadeIn().css('display', 'flex');
            $('.rubrics__wrap-right').fadeIn();
         }, 1500);
      }

      if ($(window).width() <= 1500) {
         setTimeout(function(){
            $('.rubrics').fadeIn();
         }, 1500);
      }

      if ($(window).width() <= 768) {
         $('.panorama__title').fadeToggle();
         $('.panorama__arrow-next').fadeToggle();
         $('.panorama__zoom').fadeToggle();
      }

      if($('.sidebar__item').hasClass('sidebar__item-active') && $(window).width() <= 667) {
         $('.sidebar__item').removeClass('sidebar__item-active');
         setTimeout(function(){
            $('.sidebar__item').removeClass('sidebar__item-opacity');
         }, 1550);
         setTimeout(function(){
         }, 1250);
         $('.sidebar__logo').css('display', 'none');
      } else {
         $('.sidebar__item').addClass('sidebar__item-active');
         $('.sidebar__item').addClass('sidebar__item-opacity');
         $('.sidebar__logo').css('display', 'flex');
      }

      $('.price__content').removeClass('price__active');
      $('.panorama__zoom').fadeIn();
      $('.price__arrow').css("transform","" );
   })

   //rubrics-right
   $('.rubrics__item').not('.rubrics__item-active').hover(
      function () {
         $(this).find('.rubrics__hidden').addClass('rubrics__hidden-active');
         $(this).addClass('rubrics__item-active');
      },
      function () {
         $(this).find('.rubrics__hidden').removeClass('rubrics__hidden-active');
         $(this).removeClass('rubrics__item-active');
      }
   )

   $('.rubrics-left__item').hover(
      function() {
         $(this).addClass('rubrics-left__item-active');
         $(this).find('.rubrics-left__hidden').fadeIn();
      },
      function() {
         $(this).removeClass('rubrics-left__item-active');
         $(this).find('.rubrics-left__hidden').fadeOut();
      }
   )

   //price-scripts
   $(".price__btn").swipe( {
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
         if(direction == 'up') {
            $('.price__content').addClass('price__active');
            $('.panorama__zoom').fadeOut();
            if ($('.price__arrow').css( "transform" ) == 'none'){
               $('.price__arrow').css("transform","rotate(180deg)");
            }

            $('.sidebar').removeClass('sidebar__active');
            setTimeout(function(){
               $('.sidebar__title').css('display', 'flex');
            }, 1500);
            $('.sidebar__arrow').css("transform","" );
            $('.panorama__arrow-prev').fadeIn();
            setTimeout(function(){
               $('.rubrics-left__wrap').fadeIn().css('display', 'flex');
            }, 1500);
            $('.rubrics__wrap-right').fadeIn();

            if ($(window).width() <= 1500) {
               $('.rubrics').fadeOut();
            }

            if ($(window).width() < 768) {
               setTimeout(function(){
                  $('.panorama__title').fadeIn();
                  $('.panorama__arrow-next').fadeIn();
                  $('.panorama__zoom').fadeIn();
                  $('.rubrics__wrap-right').fadeIn();
               }, 1500);
            }
            if ($(window).width() <= 667) {
               setTimeout(function(){
                  $('.panorama__arrow-next').fadeOut();
                  $('.panorama__arrow-prev').fadeOut();
               }, 1501);
            }
         } else if((direction == 'down')) {
            $('.price__content').removeClass('price__active');
            $('.panorama__zoom').fadeIn();
            $('.price__arrow').css("transform","" );

            if ($(window).width() <= 1500) {
               $('.rubrics').fadeIn();
            }

            if ($(window).width() <= 667) {
               $('.panorama__arrow-next').fadeIn();
               $('.panorama__arrow-prev').fadeIn();
            }
         }
      },
      threshold:0
   });

   $('.price__btn').click(function(){
      $('.price__content').toggleClass('price__active');
      $('.panorama__zoom').fadeToggle();
      if ($('.price__arrow').css( "transform" ) == 'none'){
         $('.price__arrow').css("transform","rotate(180deg)");
      } else {
         $('.price__arrow').css("transform","" );
      }

      $('.sidebar').removeClass('sidebar__active');
      setTimeout(function(){
         $('.sidebar__title').css('display', 'flex');
      }, 1500);
      $('.sidebar__arrow').css("transform","" );
      $('.panorama__arrow-prev').fadeIn();
      setTimeout(function(){
         $('.rubrics-left__wrap').fadeIn().css('display', 'flex');
      }, 1500);
      $('.rubrics__wrap-right').fadeIn();
      
      if ($(window).width() < 1500) {
         $('.rubrucs').fadeToggle();
      }

      if ($(window).width() <= 768) {
         $('.panorama__arrow-next').fadeIn();
         $('.panorama__zoom').fadeIn();
         $('.rubrics__wrap-right').fadeIn();
      }

      if ($(window).width() <= 667) {
         $('.panorama__arrow-next').fadeToggle();
         $('.panorama__arrow-prev').fadeToggle();
      }
   })

   //slider
   $('.panorama__slider').slick( {
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: true,
      fade: true,
      speed: 1800,
      autoplaySpeed: 15000,
      prevArrow: $('.panorama__arrow-prev'),
      nextArrow: $('.panorama__arrow-next')
   });

   idleTimer = null;
   idleState = false;
   idleWait = 120;
   
   (function ($) {
      $(document).ready(function () {
         $('*').bind('mousemove keydown scroll', function () {
            clearTimeout(idleTimer);
               if (idleState == true) {
               }
   
               idleState = false;
               idleTimer = setTimeout(function () {
                  $('.panorama__slider').slick('slickPlay');
               idleState = true;
         }, idleWait);
      });
   
      $("body").trigger("mousemove");
   
      });
   })(jQuery)

});