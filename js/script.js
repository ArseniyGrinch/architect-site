$(document).ready(function(){ 
   
   //masonry sript
   $('.gallery__inner').imagesLoaded( function() {
      $('.gallery__inner').masonry({
         itemSelector: '.gallery__item',
         isFitWidth : true,
         singleMode: false,
         isResizable: true,
         isAnimated: true,
         animationOptions: { 
            queue: false, 
            duration: 500 
         }
      }); 
   });

   $(window).bind('orientationchange', function (event) {
      location.reload(true);
   });
   //intro-subtitle show
   setTimeout(function(){
      document.getElementById('lottie').style.display = 'block';
   }, 1800);

   //gallery hidden-element show
   setTimeout(function(){
      $('#gallery').addClass('gallery-active');
   }, 26000);

   //scroll timeOut

   window.onbeforeunload = function () {
      window.scrollTo(0, 0);
   }

   $("body").css("overflow-y","hidden");

   setTimeout(function(){
      $("body").css("overflow-y","scroll");
   }, 19600);

   //gallery-show
   if ($(window).width() > 768) {
      setTimeout(function(){
         let index = -1;
   
         setInterval(function($items) {
         $items.eq(index).removeClass('#1');
         index = (index + 1) % $items.length;
         $items.eq(index).addClass('gallery__item-active');
         }, 800, $('.gallery__item'));
      }, 18300);
   } if ($(window).width() <= 768) {
      setTimeout(function(){
         let index = -1;
   
         setInterval(function($items) {
         $items.eq(index).removeClass('#1');
         index = (index + 1) % $items.length;
         $items.eq(index).addClass('gallery__item-active');
         }, 800, $('.gallery__item'));
      }, 14300);
   }

   //intro display none
   if ($(window).width() <= 768) {
      setTimeout(function(){
            $('.intro').css('display', 'none');
      }, 14700);
   }

   /* panorama */

   //sidebar-active
   $('.sidebar__btn').hover(function() {
      $('.sidebar').addClass('.sidebar__active');
   })
});