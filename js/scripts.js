$(document).ready(function() {
  let items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"];
  let userInput = [];
  // let count = 10;
  // let idCount;
  // let groceryArray = [];

  // $("#add-line").submit(function(event) {
  //   count++;
  //   idCount = "item" + count;    
  //   $("div.list").append("<input id=" + idCount + " class='form-control' type='text'>");
  //   groceryArray.push(idCount);  
  //   event.preventDefault();
  // });

  $("#grocery-list").submit(function(event) {
    items.forEach(function(item) {
      userInput.push($("input#" + item).val());
    });
    
    userInput.sort();
    alert(userInput);

    userInput.forEach(function(item) {
      if (item !== "") {
        $("#itemOutput").append("<li>" + item + "</li>");
      }
      
    })
    // 
      
      
    //   item = $("#" + id).val();
    //   alert(item);
    //   if (item !== " ") {
    //     groceryArray.push(item);
    //   };
    //   alert(groceryArray);


    event.preventDefault();
    //grocArray.sort();
    //alert(grocArray);
    //grocArray.forEach(function() {

    //});
  });
});