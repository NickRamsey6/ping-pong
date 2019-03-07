// business logic
// var pingNumber = function(ping) {
//   if ((number % 3 === 0))
// }


// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var num1 = $("#number").val();


    if(isNaN(num1)) {
      alert(num1 + " is not a number");
    }else{
      $("#yourNumbers").show();
      $("ul").prepend(num1);
      
    }
  })
})
