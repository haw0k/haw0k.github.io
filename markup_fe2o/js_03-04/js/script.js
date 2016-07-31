/*
Создать объект с методами, которые будут динамически генерировать DOM вот такой
страницы. Это будет тест, который мы будем разрабатывать в следующих заданиях.
Сейчас вам нужно только динамически создать html, методы должны храниться в
одном объекте. Для того чтоб страница выглядела красиво можете использовать
Bootstrap и создавать DOM-элементы с готовыми бутстраповскими классами.
Изначально на странице должен быть только <body>, вызывая методы объекта нужно
создать dom-элементы
*/
"use strict";
var elementProps = {};

// appendElement создает html-эл-т через appendChild
// создаваемый эл-т добавляется в конец
// parentName и elementName должны быть обязательно заданы при вызове

function appendElement (elementProps) {
  var element = document.createElement(elementProps.elementName);
  var body = document.querySelectorAll(elementProps.parentName);

  if ( elementProps.className === undefined ) {}
    else {
      element.classList.add( elementProps.className );
    }
  if ( elementProps.textHTML === undefined ) {}
    else {
      element.innerHTML = elementProps.textHTML ;
    }
  if ( elementProps.idName === undefined ) {}
    else {
      element.id = elementProps.idName;
    }
  if ( elementProps.typeName === undefined ) {}
    else {
        element.type = elementProps.typeName;
    }
  if ( elementProps.valueText === undefined ) {}
    else {
      element.value = elementProps.valueText;
    }
  if ( elementProps.forName === undefined ) {}
    else {
      element.htmlFor = elementProps.forName;
    }
  body[body.length - 1].appendChild(element);
}

/*
 insertElement создает html-эл-т elementName через insertBefore
 создаваемый эл-т добавляется в начало
 parentName и elementName должны быть обязательно заданы при вызове
*/
function insertElement(elementProps) {
  var element = document.createElement(elementProps.elementName);
  // находим родителя вновь созданного эл-та
  var body = document.querySelector(elementProps.parentName);

  if ( elementProps.className === undefined ) {}
    else {
      element.classList.add( elementProps.className );
    }

  body.insertBefore(element, body.children[0]);
}

//// HEADER
// <header>
insertElement(elementProps = {
  parentName : 'body',
  elementName : 'header',
  className : 'header' } );

// <h3>
appendElement( elementProps = {
  parentName : 'header',
  elementName : 'h3',
  className : 'header__title',
  textHTML : 'Тест по программированию' } );

//// CONTENT
// <div class="questions__container">
appendElement( elementProps = {
  parentName : 'body',
  elementName : 'div',
  className : 'questions__container' } );

/*
addQuestions добавляет в DOM блоки вопросов
*/
function addQuestions( flag ) {

// <h4 class="question__title">1. Вопрос № 1</h4>
appendElement( elementProps = {
  parentName : '.questions__container',
  elementName : 'h4',
  className : 'question__title',
  textHTML : flag + '. Вопрос № '+ flag } );

/*
 addQuestionItem добавляет в DOM блоки с вариантами ответов
*/
function addQuestionItem (k) {
// <div class="question__checkbox">
appendElement( elementProps = {
  parentName : '.questions__container',
  elementName : 'div',
  className : 'question__checkbox' } );

//<input type="checkbox" id="variant1-1">
appendElement( elementProps = {
  parentName : '.question__checkbox',
  elementName : 'input',
  typeName : 'checkbox',
  idName : 'variant' + flag +'-'+ k } );

// <label for="variant1-1">Вариант ответа №1</label>
appendElement( elementProps = {
  parentName : '.question__checkbox',
  elementName : 'label',
  forName : "variant" + flag + "-" + k,
  textHTML: 'Вариант ответа №' + k } );
}

addQuestionItem( 1 );
addQuestionItem( 2 );
addQuestionItem( 3 );
}

for (var i = 1; i < 4; i++) {
  addQuestions( i );
}

// FOOTER

//<footer class="footer">
appendElement( elementProps = {
  parentName : 'body',
  elementName : 'footer',
  className : 'footer' } );

//<input class="button-submit" type="submit" value="Проверить мои результаты">
appendElement( elementProps = {
  parentName : 'footer',
  elementName : 'input',
  className : 'button-submit',
  typeName : 'submit',
  valueText : "Проверить мои результаты" } );
