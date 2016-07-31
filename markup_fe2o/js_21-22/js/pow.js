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

var app = {
  myPow: function(base, exponent) {
    var result = 1;

    for (var i = 0; i < exponent; i++) {
      result = result * base;
    }

    return result;
  }
};

// экспорт для jasmin
module.exports = app;
