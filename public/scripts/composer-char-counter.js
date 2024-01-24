/* globals $, document */
$(document).ready(function() {
    $("#tweet-text").on("keydown", function() {
      const maxLength = 140;
      let counter = maxLength - ($(this).val().length);

      var counterElement = $(this).closest("form").find(".counter");
  
      if (counter < 0) {
        counterElement.css('color', 'red');
      } else {
        counterElement.css('color', '#545149');
      }
  
      counterElement.text(counter);
    });

    $("#btn").on('click', function() {
      console.log(this); //The this keyword is a reference to the button
    });
    
  });
