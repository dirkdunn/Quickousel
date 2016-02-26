/*
TODO:
 Carousel to Quickousel
 Arrows
 Animate.css animations
 Options
 */

(function($) {
	'use strict'
  var carousel = $('#carousel'),
    imgs = $('#carousel img');

  function clearCarousel() {
    carousel.html('<ul class="carousel"></ul>');
    for (var i = 0, length = imgs.length; i < length; i++) {
      carousel.find('.carousel').append([
        '<li style="background-image:url(\'', $(imgs[i]).attr('src'), '\');" class="item slide' + (i + 1) + '"></li>'
      ].join(""));
    }
    createCarousel();
  };

  function createCarousel() {
    carousel.find('.carousel .item').first().addClass('active').closest('ul').find('.item').hide();
    addButtons();
    startEngine();
  };
  
  function buttonAdjust(){
  	var buttonAdjust = '-' + String(parseInt( /\d+/.exec($('.carousel-buttons').css('width')) ) / 2) + 'px'
    $('.carousel-buttons').css('margin-left',buttonAdjust);
  };

  function addButtons() {
    carousel.append('<div class="carousel-buttons"></div>');
    for (var i = 0, length = imgs.length; i < length; i++) {
      if (i === 0)
        $('.carousel-buttons').append('<span class="active-button carousel-button button' + (i + 1) + '">•</span>')
      else
        $('.carousel-buttons').append('<span class="carousel-button button' + (i + 1) + '">•</span>')
    }
   
    $('.carousel-buttons .carousel-button').on('click',function(e){
    	if( !$(this).hasClass('active-button') ){
        var slideNumber = /button(\d{1})/.exec($(this).attr('class')).pop();
        //alert(slideNumber);
        switchSlide(slideNumber);
        switchButton(slideNumber);
      }
    }); buttonAdjust();
  };

  function switchButton( slideNumber ) {
  	carousel.find('.carousel-buttons .carousel-button').removeClass('active-button');
    carousel.find('.carousel-buttons .carousel-button.button' + slideNumber).addClass('active-button');   
    return false;
  };
  
  function switchSlide( slideNumber ){
      carousel
        .find('.carousel [class*="slide"].active')
        .removeClass('active').hide();
        carousel.find('.carousel .slide'+slideNumber).fadeIn('slow').addClass('active');
  };

  function startEngine() {
    setInterval(function() {
    	var slideNumber;
      if (carousel.find('[class*="slide"].active').next().length) {
      	slideNumber = /slide(\d{1})/.exec( carousel.find('[class*="slide"].active').next().attr('class') ).pop();
        switchButton(slideNumber)
				switchSlide(slideNumber)
      } else {
        switchButton("1");
        switchSlide("1");
      }
    }, 8000);
  };

  function injectCss(){
    $('head').prepend('<link rel="stylesheet" href="c-css.css"/>');
  };

  function init() {
    clearCarousel();
  };

  injectCss();
  $(document).ready(init);
  
})(jQuery);
