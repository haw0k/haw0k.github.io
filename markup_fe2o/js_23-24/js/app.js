requirejs.config({
  paths: {
    // 'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery',
    'jquery' : 'https://code.jquery.com/jquery-1.12.4'
  }
  ,
  shim: { // здесь мы можем менять имена модулей
    'jquery': {
      exports: 'jQuery'
    }
  }
});
require(
  [
    'tmpl',
    'jquery',
    'model',
    'view',
    'controller',
  ],
  function ($, tmpl, Model, View, Controller) {
    var firstTodoList = ['learn javascript', 'learn html', 'make coffie'];
    var newModel = new Model(firstTodoList);
    var newView = new View(newModel);
    var newController = new Controller(newModel, newView);
  }
);
