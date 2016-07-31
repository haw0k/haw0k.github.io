
// ф-ция вызвывается, когда DOM загружен
$(function () {
  var $tabText1 = $('.tabtext-1');
  var $tabText2 = $('.tabtext-2');
  var $tabText3 = $('.tabtext-3');
  var $link1 = $('.link1');
  var $link2 = $('.link2');
  var $link3 = $('.link3');
  var $tab1 = $('.li1');
  var $tab2 = $('.li2');
  var $tab3 = $('.li3');
  var GRADIENT = 'linear-gradient(to bottom, rgba(238,238,238,1) 0%,rgba(238,238,238,1) 100%)';

  $link1.css({ display: 'inline-block' });
  $link2.css({ display: 'inline-block' });
  $link3.css({ display: 'inline-block' });

  $tabText1.css({ display: 'block' });
  $tabText2.css({ display: 'none' });
  $tabText3.css({ display: 'none' });

// при клике на табе меняем фон у активного эл-та, отсальные закрашиваем градиентом
  $tab1.on('click',function (event) {
    $tabText1.css({ display: 'block'});
    $tabText2.css({ display: 'none'});
    $tabText3.css({ display: 'none'});
    $tab1.css({ background: 'white' });
    $tab2.css({ background: GRADIENT });
    $tab3.css({ background: GRADIENT });
  });

  $tab2.on('click',function (event) {
    $tabText1.css({ display: 'none' });
    $tabText2.css({ display: 'block' });
    $tabText3.css({ display: 'none' });
    $tab1.css({ background: GRADIENT });
    $tab2.css({ background: 'white' });
    $tab3.css({ background: GRADIENT });
  });

  $tab3.on('click',function (event) {
    $tabText1.css({ display: 'none' });
    $tabText2.css({ display: 'none' });
    $tabText3.css({ display: 'block' });
    $tab1.css({ background: GRADIENT });
    $tab2.css({ background: GRADIENT });
    $tab3.css({ background: 'white' });
  });

// указатель мыши при наведении на таб меняется на pointer
  $tab1.hover(
    function () {
      $tab1.css({ cursor: 'pointer' });
    },
    function () {
      $tab1.css({ cursor: 'default' });
    }
  );
  $tab2.hover(
    function () {
      $tab2.css({ cursor: 'pointer' });
    },
    function () {
      $tab2.css({ cursor: 'default' });
    }
  );
  $tab3.hover(
    function () {
      $tab3.css({ cursor: 'pointer' });
    },
    function () {
      $tab3.css({ cursor: 'default' });
    }
  );

// нажатие на кнопку "Show help" приводит к отображению всех подсказок
  $('.button').on('click',function (event) {
    $('.hint-firstname').css({ display: 'inline-block' });
    $('.hint-lastname').css({ display: 'inline-block' });
    $('.hint-address').css({ display: 'inline-block' });
  });

  $('#firstname').hover(
    function () {
      $('.hint-firstname').css({ display: 'inline-block' });
      $('.hint-lastname').css({ display: 'none' });
      $('.hint-address').css({ display: 'none' });
    },
    function () {
      $('.hint-firstname').css({ display: 'none' });
    }
  );

  $('#lastname').hover(
    function () {
      $('.hint-firstname').css({ display: 'none' });
      $('.hint-lastname').css({ display: 'inline-block' });
      $('.hint-address').css({ display: 'none' });
    },
    function () {
      $('.hint-lastname').css({ display: 'none' });
    }
  );

  $('#address').hover(
    function () {
      $('.hint-firstname').css({ display: 'none' });
      $('.hint-lastname').css({ display: 'none' });
      $('.hint-address').css({ display: 'inline-block' });
    },
    function () {
      $('.hint-address').css({ display: 'none' });
    }
  );

});
