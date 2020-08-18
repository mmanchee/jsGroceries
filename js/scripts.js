$(document).ready(function() {
  let items = ["item1"];
  let userInput = [];
  let count = 1;
  let idCount;

  $("#add-line").click(function(event) {
    count++;
    idCount = "item" + count;    
    $("div.list").append("<input id=" + idCount + " class='form-control' type='text'>");
    items.push(idCount);  
    event.preventDefault();
  });

  $("#submit").click(function(event) {
    items.forEach(function(item) {
      userInput.push($("input#" + item).val());
    });
    
    userInput.sort();

    userInput.forEach(function(item) {
      if (item !== "") {
        item = item.toUpperCase();
        $("#itemOutput").append("<li>" + item + "</li>");
      }      
    });

    $("#list").show();
    $(".grocery-list").hide();

    event.preventDefault();
 
  });
});