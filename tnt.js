//OPEN NAV ON HAMBURGER CLICK
$(".hamburger").click(function(){
  $("nav").toggleClass("open");
  $(this).toggleClass("toggle");
});

$(".contact").click(function(){
  $("nav").toggleClass("open");
  $('.hamburger').toggleClass("toggle");
});
$(".start").click(function(){
  $("nav").toggleClass('open');
  $('.hamburger').toggleClass('toggle')
});

$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});


var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');

  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();
