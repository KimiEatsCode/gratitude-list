$(document).ready(function() {

  //user to be able to input text and save it
  $('form').submit(function(event) {

    event.preventDefault(); //prevent default action of submit which submits data, we want to keep data

    //user text should not be empty  

    var newItem = $('#itemInput').val().trim();

    if (newItem != "") {
      $('#itemInput').val() === 0;
      //if newItem is NOT blank, then user text should be added to list with delete button
      $('#itemList').append('<li class="deleteButton glyphicon glyphicon-heart">&nbsp;' + newItem + '&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-remove-sign font-1x"></span></li>')

    } else {
      alert('Your empty');
    }
  });

  //delete button should remove item
  $('#itemList').on('click', '.deleteButton', function() {
    $(this).closest('li').remove();
  });
  
   
  //dbl click should toggle check off item
  $('#itemList').on('dblclick', 'li', function() {
    $(this).toggleClass('checked');
  });

  //on submit not need to reset form just make #iitemInput which is an input text field
  $('form').submit(function() {
    $('#itemInput').val('');
  });

  $(".reset").click(function() {
    $(this).closest('form').find("input[type=text], textarea").val("");
  });

});