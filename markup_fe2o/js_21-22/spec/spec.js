var app = require('../js/pow.js');
// require - стандартная команда node.js, которая заргужает файл, указанный в аргументе команды

describe("app", function() {

// xit - пропуск теста
  it("method myPow()", function() {
    // prepare - в этом блоке мы делаем приготовления к тесту
    var result;
    var base = 2;
    var exponent = 10;

    // act - вызываем тестируемый метод
    result = app.myPow(base, exponent);

    // assert - проверяем, правильно ли отработал наш  метод
    expect(result).toEqual(1024);

  });

});
