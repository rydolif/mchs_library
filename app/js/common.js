$(function() {

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
    $('.header__container').toggleClass('header__container--menu');
  });

//------------------------slider-section-----------------------------------
  $(".section").each(function(index, el) {
    $(el).addClass('section-' + index);
    
    var swiper = new Swiper('.section-' + index + ' .swiper-container', {
      slidesPerView: 6,
      spaceBetween: 5,
      navigation: {
        nextEl: '.section-' + index + ' .swiper-button-next',
        prevEl: '.section-' + index + ' .swiper-button-prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 5
        },
        767: {
          slidesPerView: 3
        },
        480: {
          slidesPerView: 2
        }
      }
    });
  });

//---------------------------js-----------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.tabs ul a:first').addClass('active');
   $('.tabs ul a').click(function(event){
    event.preventDefault();
    $('.tabs ul a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });

});

