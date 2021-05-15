//show current date
var getDate = moment().format('dddd MMMM Do, YYYY');
console.log(getDate);
$("#currentDay").text(getDate);

//edit event on click
$(".event-entry").on("click", "p", function() {
    var text = $(this);
    var textInput = $("<textarea>")
.addClass("form-control")
  .val(text);
  $(this).replaceWith(textInput);
  });
