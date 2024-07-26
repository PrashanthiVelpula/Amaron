

var EveryNeed = [

    {image:"Two-Wheeler.png",
   
     name:"Two<br>Wheeler"},
   
    {image:"Three-Wheeler.png",
   
     name:"Three<br>Wheeler"},
   
    {image:"Passanger-Veehicle.png",
   
     name:"Passenger<br>Veehicle"},
   
    {image:"Commercial-Vehicle.png",
   
     name:"Commercial<br>Vehicle"},
   
    {image:"Farm-Vehicle.png",
   
     name:"Farm<br>Vehicle"},
   
    {image:"Invrtor-battery.png",
   
     name:"Inverters &<br>batteries"},
   
    {image:"E-rikshaw.png",
   
     name:"E-Vehicles"},
   
    {image:"other-application.png",
   
     name:"Other<br> Applications"}
   
   ];
   var list = document.getElementById("every-need-ul");         //registering id
   function print() {
   var newArray = EveryNeed.map(function (value, index) {

    var data = `<li>

                <img src="./images/${value.image}" alt="${value.value}" />

                <span>${value.name}</span>

             </li>`;

    return data;

  });
  var newString = newArray.join("");            //storing data in new string
    list.innerHTML = newString;
 }

 print();