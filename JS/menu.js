$(function(){
    $("#ham").on("click", function(){
        console.log("hello");
        $(".main-header-menu-section > .menu").animate({
            left:"0%",
        });
    });
    
    $(".user > div > button").on("click", function(){
        $(".main-header-menu-section > .menu").animate({
          left:"-80%",
        });
    });

 });
// $("#ham").on("click", function () {
  
//     console.log("hello");

//     $(".main-header-menu-section > .menu").animate({

//       left: "0%",

//     });

//   });



//   $("#user-btn").on("click", function () {

//     $(".main-header-menu-section > .menu").animate({

//       left: "-80%",

//     });

//   });

$(function(){
    $("#submit1").hide();
    $("#submit2").hide();
    $(".hide").hide();

  $("#signUp").on("click",function(){
   console.log("click");
   $("#submit").show();
   $("#submit1").hide();
   $("#submit2").hide();
   $(".hide").hide();
  
  });

  $("#login,#login-mobile").on("click",function(){
    console.log("click");
    $("#submit").hide();
    $("#submit1").show();
    $("#submit2").hide();
    // $("#login-mobile").prop(checked,true);
    $(".hide").show();

   });

   $("#login-email").on("click",function(){
    console.log("click");
    $("#submit").hide();
    $("#submit1").hide();
    $("#submit2").show();
    // $(".hide").show();
 

   });
 
});

   
  
  


















