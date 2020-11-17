/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */




function main() {
  $('#js-shopping-list-form').submit(function(e){
    let newItem = $('#shopping-list-entry').val();
    let html = `<li>
    <span class="shopping-item">${newItem}</span>
    <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
    <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
    <span class="button-label">delete</span>
    </button>
    </div>
    </li>`;
    $('ul').append(html);
    e.preventDefault(); 
  });
  $('ul').on('click', '.shopping-item-toggle', function(e){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  $('ul').on('click', '.shopping-item-delete', function(e){
    $(this).parent().parent().remove(); 
  });
}


$(main);
