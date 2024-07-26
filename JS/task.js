// function fun(){
//     var count=0;
//     function counter(){
//         count++;
//         console.log(count);
//     }
//     return counter;
// }
// var obj = fun();
// obj();
// obj();
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