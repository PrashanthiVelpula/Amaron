//creating a custom carousel for adbanner page

$(function () {                           //function for onload instance
    var count = 1;                         //counter variable

    $("#back").on("click", function () {               //function for previous button
      $(".ind-carousel-item").animate({
        left: "+=450px",
      });
      count--;
      handle();
    });
  
    $("#next").on("click", function () {     //function for next button
      $(".ind-carousel-item").animate({
        left: "-=450px",
      });
  
      count++;
      handle();
    });

    function handle() {                         //function to handle buttons according to number of images by animation
      total = $(".ind-carousel-item").length;
  
      if (count === 1) {
        $("#back").animate({ opacity: 0 }).prop("disabled", true);
        $("#next").animate({ opacity: 1 }).prop("disabled", false);
      } else if (count === total) {
        $("#back").animate({ opacity: 1 }).prop("disabled", false);
        $("#next").animate({ opacity: 0 }).prop("disabled", true);
      } else {
        $("#back").animate({ opacity: 1 }).prop("disabled", false);
        $("#next").animate({ opacity: 1 }).prop("disabled", false);
      }
    }
  
  
 });
  
 $(function () {                           //function for onload instance
  var count = 1;                         //counter variable

  $("#back1").on("click", function () {               //function for previous button
    $(".ind-carousel-item-1").animate({
      left: "+=200px",
    });
    count--;
    handle();
  });

  $("#next1").on("click", function () {     //function for next button
    $(".ind-carousel-item-1").animate({
      left: "-=200px",
    });

    count++;
    handle();
  });

  function handle() {                         //function to handle buttons according to number of images by animation
    total = $(".ind-carousel-item-1").length;

    if (count === 1) {
      $("#back1").animate({ opacity: 0 }).prop("disabled", true);
      $("#next1").animate({ opacity: 1 }).prop("disabled", false);
    } else if (count === total) {
      $("#back1").animate({ opacity: 1 }).prop("disabled", false);
      $("#next1").animate({ opacity: 0 }).prop("disabled", true);
    } else {
      $("#back1").animate({ opacity: 1 }).prop("disabled", false);
      $("#next1").animate({ opacity: 1 }).prop("disabled", false);
    }
  }


});
