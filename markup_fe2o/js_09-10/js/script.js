// $(function(){
//
// $('select.styled').customSelect();
//
// });
$(document).ready(function(){
  $('.styled').customSelect();

  $( '.dropdown' ).hover(
    function(){
      $(this).children('.sub-menu').slideDown(300);
    },
    function(){
      $(this).children('.sub-menu').slideUp(300);
    }
  );

  $('.sub-menu').mouseenter( function () {
  	$(this).animate({	backgroundColor:"#ff8c38", color: "#393976" }, 300 );
  });

  $('.sub-menu').mouseleave(function() {
     $(this).animate({ backgroundColor:"#FBAB70", color: "#2C2621" }, 300 );
  });
});
