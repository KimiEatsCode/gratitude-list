

var itemTemplate = $('#templates .item')
var list         = $('#list')

var addItemToPage = function(itemData) {
  var item = itemTemplate.clone()
  item.attr('data-id',itemData.id)
  item.find('.description').text(itemData.description)
  if(itemData.completed) {
    item.addClass('completed')
  }
  list.append(item)
}

var loadRequest = $.ajax({
  type: 'GET',
  url: "https://listalous.herokuapp.com/lists/joesmo/"
})

loadRequest.done(function(dataFromServer) {
  var itemsData = dataFromServer.items

  itemsData.forEach(function(itemData) {
    addItemToPage(itemData)
  })
})

$('#add-form').on('submit', function(event) {
  event.preventDefault()
  var itemDescription = event.target.itemDescription.value
  var creationRequest = $.ajax({
     type: 'POST',
     url: "https://listalous.herokuapp.com/lists/joesmo/items",
     data: { description: itemDescription, completed: false }
   })

  creationRequest.done(function(itemDataFromServer) {
    addItemToPage(itemDataFromServer)
  })
})

 /***Add a to-do from database***/

 $('#list').on('click', '.complete-button', function(event) {
  var item = $(event.target).parent()
  var isItemCompleted = item.hasClass('completed')
  var itemId = item.attr('data-id')

  var updateRequest = $.ajax({
    type: 'PUT',
    url: "https://listalous.herokuapp.com/lists/joesmo/items/" + itemId,
    data: { completed: !isItemCompleted }
  })

  updateRequest.done(function(itemData) {
    if (itemData.completed) {
      item.addClass('completed')
       item.removeClass('not-done')
    } else {
      item.removeClass('completed')
      item.addClass('not-done')
    }
  })
})

 /***Delete a to-do from database***/

 $('#list').on('click', '.complete-button', function(event) {
  var item = $(event.target).parent()
  var isItemCompleted = item.hasClass('completed')
  var itemId = item.attr('data-id')

  var updateRequest = $.ajax({
    type: 'PUT',
    url: "https://listalous.herokuapp.com/lists/joesmo/items/" + itemId,
    data: { completed: !isItemCompleted }
  })

  updateRequest.done(function(itemData) {
    if (itemData.completed) {
      item.addClass('completed')
       item.removeClass('not-done')
    } else {
      item.removeClass('completed')
      item.addClass('not-done')
    }
  })
})


$('#list').on('click', '.delete-button', function(event) {
  var item = $(event.target).parent()
  var isItemCompleted = item.hasClass('completed')
  var itemId = item.attr('data-id')

  var updateRequest = $.ajax({
    type: 'DELTE',
    url: "https://listalous.herokuapp.com/lists/joesmo/items/" + itemId,
     }

  })

  updateRequest.done(function(itemData) {
    if (itemData.completed) {
      item.addClass('completed')
    } else {
      item.removeClass('completed')
    }
  })
})
