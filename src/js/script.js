
let slider;

$(document).ready(function(){
	slider = $('.content_slide_1').slick({
    //к-сть показу слайдів
		slidesToShow: 1,
		 arrows: false,
		  centerMode: true,
  centerPadding: '133px',
    // автоматичний рух слайдів
		autoplay: true,
    //швидкість руху
		autoplaySpeed: 2000,
  dots: true,
	  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
	});
});

//slider-2
let slider_2;

$(document).ready(function(){
	slider_2 = $('.content_slide_2').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		 dots: true,
		 arrows: false,

	});
});

//кнопка з меню
jQuery('.header-humb').on('click', function(){
	jQuery('.menu').toggleClass('opened');
})


 //фіксоване меню приховується при прокрутці
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  //якщо прокрутити на 80px вниз,приховається гамбургер(меню з 3-ох ліній)
  if(scrolled >= 80)
    document.querySelector(".header-humb").style.display = 'none';
  else if(scrolled<=80){
    document.querySelector(".header-humb").style.display = 'block';
  }
}

//блок при натисканні на кнопку
$(function() {
   $('.basket button').click(function(){
      $('.show_block').stop().fadeToggle();
    });

});
