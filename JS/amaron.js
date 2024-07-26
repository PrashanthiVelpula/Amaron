

var about = document.getElementById("footer-1");               //linking html footer-1 section with id
var product = document.getElementById("footer-2");
var service = document.getElementById("footer-3");
var exp = document.getElementById("footer-4");
var other = document.getElementById("footer-5");

function print() {
  var newArray = list.map(function (value, index) {                         //map-function
    var data = `<li>
  ${value}
              </li>`;
    return data;
  });

  var newString = newArray.join("");
  return newString;
}

var list = [                                     //footersection-first array
  "Amara Raja",
  "Management",
  "Aftermarket",
  "OEM",
  "International Operations",
  "Manufacturing ",
];
about.innerHTML = print();                                             //function call for dynamic output

var list = [
  "Two Wheelers",
  "Three-Wheelers",
  "Passenger Vehicles",
  "Commercial Vehicles",
  "Farm Vehicles",
  "Earth-Moving Equipment ",
  "Genset",
  "Rickshaw",
  "Others",
];

product.innerHTML = print();


var list = [
  "AMCARE",
  "Tips for buying batteries",
  "Battery Safety",
  "Terminology",
  "FAQ'S",
  "Battery Replace",

  "Others",
];

service.innerHTML = print();


var list = 
["Media",
 "Ad Gallery",
 "Fun",
 "Logo",
 "Events"];

exp.innerHTML = print();


var list = [
  "Contact",
  "Blogs",
  "Terms & Conditions",
  "Privacy Policy",
  "Farm Vehicles",
  "Online Orders ",
  "Sitemap",
];

other.innerHTML = print();
