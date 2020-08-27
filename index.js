
$(function () { //shorthand document.ready function
  $('#add-item-button').on('click', function (e) {
    e.preventDefault();
    var newItem = $('#shopping-list-entry').val();
    if (newItem.length != 0) {
      appendNewItem(newItem);
    } else {
      alert('Please add item name');
    }
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function (e) {
    checkItem($(e.currentTarget));
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function (e) {
    deleteItem($(e.currentTarget));
  });


  function createListItem(shoppingItem) {
    return `<li>
        <span class='shopping-item'>${shoppingItem}</span>
        <div class='shopping-item-controls'>
          <button class='shopping-item-toggle'>
            <span class='button-label'>check</span>
          </button>
          <button class='shopping-item-delete'>
            <span class='button-label'>delete</span>
          </button>
        </div>
      </li>`
  }

  function appendNewItem(newItem) {
    $('.shopping-list').append(createListItem(newItem))
  }

  function deleteItem(shoppingItem) {
    shoppingItem.parent().closest('li').remove();
  }

  function checkItem(shoppingItem) {
    shoppingItem.parent().closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  }
});

