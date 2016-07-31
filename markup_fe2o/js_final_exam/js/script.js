'use strict';
var API_KEY = '2627823-b4a9afed2842cde123c1026a7';


function imageSearch() {
  // $( ".grid" ).empty();
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  var searchStr;

  if ($(".search__input").val() == "") {
    searchStr = "travel";
  } else {
    searchStr = encodeURIComponent( $(".search__input").val() );
  }

  $.getJSON( flickerAPI, {
      tags: searchStr,
      tagmode: "all",
      format: "json",
      media: "photos"
    })

  .done(function( data ) {
    $.each( data.items, function( i, item ) {
        if (i === 4 || i === 5) {
          $('.grid').append('<div class="grid-item grid-item--width2">');
        } else {
          $('.grid').append('<div class="grid-item">');
        };
        $('.grid-item:last').css({ "background-image" :
          "url('" + flicrImgBig(item.media.m) + "')", "background-repeat" : "repeat",
          "background-position" : "center" });
        $('.grid-item:last').append("<p>" + cutTextUntilSpace(item.tags) + "</p>");
      if ( i === 6 ) {
        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            columnwidth: '.grid-sizer',
            gutter: 20
          });
        // $grid.masonry('reload');
        return false;
      }
    });
  });
};

function cutTextUntilSpace(text) {
  var resultText = text.slice(0, text.indexOf(" ") );
  return resultText;
}

function flicrImgBig( picUrl ) {
  var resultUrl = picUrl.slice(0, picUrl.indexOf("_m.jpg") ) + '_b.jpg';
  return resultUrl;
};


$( document ).ready(function() {

  imageSearch();
  $(".search__button").on("click", function( event ) {
    event.preventDefault();
    $( ".grid" ).empty();
    $('.grid').append('<div class="grid-sizer">');
    $('.grid').masonry('destroy');
    imageSearch();
  });

// --------------------------------------------
// OWL carousel
  var owl1 = $('#owl-slider1');
  owl1.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsiveBaseElement: '#owl-slider1',
    responsive:{
        0:{
            items: 1
        },
    },
  });

  var owl2 = $('#owl-slider2');
  owl2.owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    responsiveBaseElement: '#owl-slider2',
    responsive:{
        0:{
            items:1
        },
    },
  });

  var owl3 = $('#owl-slider3');
  owl3.owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    responsiveBaseElement: '#owl-slider3',
    responsive:{
        0:{
            items:1
        },
    },
  });

  $('#owl-slider1 .step-sliders__control-next--1').click(function() {
    owl1.trigger('next.owl.carousel');
  })
  $('#owl-slider1 .step-sliders__control-prev--1').click(function() {
    owl1.trigger('prev.owl.carousel');
  })

  $('#owl-slider2 .step-sliders__control-next').click(function() {
    owl2.trigger('next.owl.carousel');
  })
  $('#owl-slider2 .step-sliders__control-prev').click(function() {
    owl2.trigger('prev.owl.carousel');
  })

  $('#owl-slider3 .step-sliders__control-next').click(function() {
    owl3.trigger('next.owl.carousel');
  })
  $('#owl-slider3 .step-sliders__control-prev').click(function() {
    owl3.trigger('prev.owl.carousel');
  })


});
