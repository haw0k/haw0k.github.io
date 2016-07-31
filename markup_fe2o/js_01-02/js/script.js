/*
Написать функцию pow, аналогичную Math.pow, которая должна возводить указанное
число в указанную степень. Указать число и степень пользователь должен через
команду prompt. Результат выполнения функции вывести в консоль. Работать с
целыми числами, большими, меньшими, и равными нулю. Бесконечности можно не
обрабатывать
*/

/**
 * Возвращает base в степени exponent, только для натуральных exponent
 *
 * @param {number} base Число для возведения в степень.
 * @param {number} exponent Показатель степени, натуральное число.
 * @return {number} base в степени exponent.
 */
function myPow(base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result = result * base;
  }

  return result;
}

var base = prompt("Введите число",2);
var exponent = prompt("Введите степень",2);

if (exponent < 0) {
  alert ('Степень ' + exponent +
        'не поддерживется, введите целую степень, большую 0');
} else {
  alert( myPow(base, exponent) );
}

console.log( myPow(base, exponent) );
