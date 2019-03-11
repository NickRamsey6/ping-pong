// business logic
// var pingNumber = function(ping) {
//   if ((number % 3 === 0))
// }


// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var num1 = $("#number").val();
    let array =[];

    for (var index = 1; index <= num1; index ++) {
      array.push(index);
    }
      $("#yourNumbers").show();
      $("ul").prepend(array);

  });
});
