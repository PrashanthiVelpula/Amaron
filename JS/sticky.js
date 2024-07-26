// $(window).scroll(function(){
//     if ($(window).scrollTop() >= 300)

//      {
//         $('main-header-first').addClass('fixed-header');$('main-header-first-1').addClass('visible-title');
       
//     }
// else
//  {
//     $('main-header-first').removeClass('fixed-header');$('main-header-first-1').removeClass('visible-title');
    
// }

// });

$("#tab").tabs({



    active:1,
  
  
  
    event:"click",
  
  
  
    collapsible:true,
  
  });


  
$(function () {

    $(document).bind("scroll", ".carousel-sec", function () {
  
      var offset = $(".carousel-sec").offset().top - $(window).scrollTop();
  
      if (offset < 50) {
  
        $(".main-header-first-1").slideUp(200);
  
        $(".banner-class").animate({
  
          width: "70%",
  
        });
  
      } else {
  
        $(".main-header-first-1").slideUp(200);
  
        $(".banner-class").animate({
  
          width: "initial",
  
        });
  
      }
  
    });
  
  });