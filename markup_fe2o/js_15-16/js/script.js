'use strict';

var API_KEY = '2627823-b4a9afed2842cde123c1026a7';

$( document ).ready(function() {
  // disable "Search" key if input text is empty
  $("#input-text").on("input",function( event ) {
    if ( $("#input-text").val() != "" ) {
      $(".button-submit").prop("disabled", false);
    } else {
        $(".button-submit").prop("disabled", true);
    }
  });
  // "Search" button pressed
  $(".button-submit").on("click", function( event ) {
    event.preventDefault();
    $( ".pic-preview" ).empty();
    var searchStr = encodeURIComponent( $("#input-text").val() );
    var URL = 'https://pixabay.com/api/?key='+API_KEY+'&q='+searchStr + '&orientation=vertical';
    $.getJSON(URL, function(data){
        // var j = 0;
        if (parseInt(data.totalHits) > 0) {
          $.each(data.hits, function(i, hit){
            var html = $('#resig-template').html();
            var content = tmpl(html, {
              data: hit
            });
            $('#insertion-wrapper').after(content);
          });
        }
        else console.log('No hits');
    });
  });
});
