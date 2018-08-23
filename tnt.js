//OPEN NAV ON HAMBURGUER CLICK
$(".hamburguer").click(function(){
  $("nav").toggleClass("open");
  $(this).toggleClass("toggle");
});

$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});
