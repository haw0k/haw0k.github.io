'use strict';
// document.addEventListener("DOMContentLoaded", function(event) {
var CORRECT_ANSWERS = [1, 2, 3];

$(function() {
    var questions = [
      {
        question  : 'Зимой и летом одним цветом',
        answer1   : 'Ель',
        answer2   : 'Река',
        answer3   : 'Трава',
      },
      {
        question  : 'Без окон, без дверей, полна горница людей',
        answer1   : 'Избушка на курьих ножках',
        answer2   : 'Огурец',
        answer3   : 'Сарай',
      },
      {
        question  : 'Сижу верхом, не ведаю на ком',
        answer1   : 'Молоко',
        answer2   : 'Ветер',
        answer3   : 'Шапка',
      }
    ];

    localStorage.setItem('questions', JSON.stringify(questions));

    var articles = localStorage.getItem('questions');
    articles = JSON.parse(articles);
    //
    // console.log(articles);

// вызов ф-ции рендеринга html через шаблон Резига
    $(function() {

      var html = $('#resig-template').html();
      var content = tmpl(html, {
        data: articles
      });

      $('body').append(content);
      var currentAnwsers = [0, 0, 0];

      $('.checkgroup').on("click", function () {
        for (var i = 1; i < 4; i++) {
          for (var j = 1; j < 4; j++) {
            var idName = '#variant' + i + '-' + j;
// запись ответа в массив результатов
            if ( $(idName).prop("checked") ) {
              currentAnwsers[i-1] = j;
            }
          }
        };
// если заполнены ответами все три вопроса, разблокируем кнопку "отправить"
        if ( (currentAnwsers[0] > 0) && (currentAnwsers[1] > 0) && (currentAnwsers[2] > 0) ) {
          $( ".button-submit" ).prop( "disabled", false );
        } else { $( ".button-submit" ).prop( "disabled", true ) }
    });

// при отправке результатов теста проверяем правильность ответов
    var bal = 0;

    $( "form" ).submit(function( event ) {
      event.preventDefault();
      for (var i = 0; i < currentAnwsers.length; i++) {
        if ( CORRECT_ANSWERS[i] == currentAnwsers[i] ) { bal++ }
      }
      	
      // alert('Количество правильных ответов: '+ bal);
      $( '<p>Количество правильных ответов: '+ bal + '</p>' ).appendTo( ".modalWindow" );
      $( '<input class="ok-button" type="submit" value="OK">').appendTo( ".modalWindow" );
// обнуляем страницу для предоставления возможности прохождения повторного теста
      for ( i = 1; i < 4; i++) {
        for ( var j = 1; j < 4; j++) {
          var idName = '#variant' + i + '-' + j;
          $(idName).prop("checked", false);
          $(idName).prop("disabled", true); // делаем чекбоксы read-only
        }
      }
      $( ".button-submit" ).prop( "disabled", true );
      $( ".ok-button" ).on("click",function( event ) {
        $('.modalWindow').fadeOut('fast');
        // console.log('bingo');
        event.preventDefault();
        $( ".ok-button" ).detach();
        $( "p" ).detach();
        $('.checkgroup').prop("disabled", false); // делаем чекбоксы доступными для выбора
	currentAnwsers = [0, 0, 0];
      });
      $('.modalWindow').fadeIn('fast');

      bal = 0;
    });

  });
});
