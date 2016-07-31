define(
  'controller',
  ['jquery', 'model', 'view'],
  function ($) {
    function Controller(model, view) {
      var self = this;

      view.elements.addBtn.on('click',addItem);
      view.elements.listContainer.on('click', '.item-delete', removeItem);
      view.elements.input.on('keypress', function(e) {
        if (e.which == 13) {
            addItem();
        }
      });

      view.elements.listContainer.on('dblclick', '.toDoList__item', function(){
        $(this).removeAttr('disabled');
        $(this).on('keypress', function(e){
          if (e.wich == 13) {
            editItem();
          }
        });
        $(this).one('focusout', editItem);
      });

      function addItem() {
        var newItem  = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val(''); // обнуляем содержимое строки ввода
      };

      function removeItem() {
        var item = $(this).attr('data-value');

        model.removeItem(item);
        view.renderList(model.data);
      }

      function editItem(){
        var item = $(this).val();

        var index = $(this).parent().index();

        model.renameItem(item, index);
        view.renderList(model.data);
      }
    }
    return Controller
  }
);
