$(document).ready(function(){ 
   /* menu */
   $('.header__menu').click(function(){
      $('.main__inner').toggleClass('main__inner-active');
      $('.menu').toggleClass('menu__active');
      $('.header__menu').toggleClass('header__menu-active');
   })

   /* reviews */
   $('.reviews__slider').slick( {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      infinite: true,
      responsive: [
         {
            breakpoint: 967,
            settings: {
               slidesToShow: 1,
               fade: true,
               cssEase: 'linear'
            }
         }
      ]
   });

   /* popup-video */
   $('.consultation__video').bind('click', function( event ){
      setTimeout(function(){
         $('.blog').css('display', 'none');
         $('.popup').fadeIn();
      }, 200);
      let iframeLink = $(this).find('iframe').attr('src');
      $('.popup-video__iframe').attr('src', iframeLink);
   })


   $('.popup-video__close').click(function(){
      $('.blog').css('display', 'block');
      $('.popup').fadeOut();
      $('.popup-video__iframe').attr('src', 'empty');
      $('.reviews__slider').slick('refresh');
   })

   /* consultation-nav */
   $('.consultation__item-primary').click(function(){
      $('.consultation__content-secondary').removeClass('consultation__content-active');
      $('.consultation__content-primary').addClass('consultation__content-active');
      $('.consultation__item-primary').removeClass('consultation__item-active');
      $('.consultation__item-secondary').addClass('consultation__item-active');
   })

   $('.consultation__item-secondary').click(function(){
      $('.consultation__content-primary').removeClass('consultation__content-active');
      $('.consultation__content-secondary').addClass('consultation__content-active');
      $('.consultation__item-secondary').removeClass('consultation__item-active');
      $('.consultation__item-primary').addClass('consultation__item-active');
   })
});