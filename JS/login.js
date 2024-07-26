var mobile=document.getElementById("mobile");        //registering all the variables id's
var email=document.getElementById("email");
var otp=document.getElementById("otp");
var password=document.getElementById("password");


var Submit = document.getElementById("submit");
var list1 = [];                                                      //creating new array    
var data=localStorage.getItem("list1");                               // printing data from local storage 
list1=JSON.parse(data);                                               //parsing data to print
list1=data===null? [] : JSON.parse(data); 


if(Submit !== null){
Submit.addEventListener("submit", function (event) {         //creating submit button's action
event.preventDefault();
        var nUser = {};
        var form=new FormData(Submit);
        form.forEach(function(value,name){
            nUser[name]=value;
        })
        console.log(Number(nUser["mobile"][0]));
  var flag=false;
    if(Number(nUser["mobile"][0])>5 && (nUser["mobile"].length===10))
    {
      
        flag=true;
    }

    else{
        alert("Enter valid mobile number...")
        Submit.reset(); 
    }
    var f=false;
    if((nUser["otp"].length===4))
        {
        
            f=true;
        }

        else{
            alert("Enter valid otp of length 4 digits")
            Submit.reset(); 
        }
    var f1=false;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(nUser["email"])) 
    {     f1=true;   }   
    else 
    { alert("You have entered an invalid email address!")
         Submit.reset();  } 

      if(flag && f && f1 ===true){
          list1.push(nUser);                                             //providing values for localstorage
          localStorage.setItem("list1",JSON.stringify(list1));
          alert("User Added Successfully.!!!"); 
      }
    // console.log(list1);                                //printing data in console
       
        
        print();                                         //calling table's print function
       Submit.reset();
    });}


    var tablelistPrint=document.getElementById("tablelist");     //registering table id

    function print(){
       if (tablelistPrint===null)return false;                    //function for storing and printing data in table
        var list2=list1.map(function(value,index){
            var data= `<tr>
            <th scope="row">${index+1} </th>
    
            <td>${value.mobile}</td>
            <td>${value.otp}</td>
            <td>${value.email}</td>
            <td>${value.password}</td>
            <td>
            <button class="btn btn-danger btn-sm" onclick="remove(${index})" >
            <i class="fa fa-trash" aria-hidden="true"></i></button>
            <button class="btn btn-primary btn-sm">
            <i class="fa fa-edit" aria-hidden="true"></i></button>
    
            </td></tr>`
            return data;
        });
        var newString=list2.join("");
        tablelistPrint.innerHTML=newString;
        // console.print(tablelistPrint);
    }
  print();    //calling table's print function





    function remove(index)
    {
        var del=confirm("Are you sure?")                          //function for deleting individual row in a table
        if( del==true)
            list1.splice(index,1)
    
        alert("User Deleted Successfully");
        print();
        localStorage.setItem("list1",JSON.stringify(list1));
    
    }
    

//var formSubmit=document.getElementById("submit1");
var list2=[];

//var mobile=document.getElementById("mobilenum");        //registering all the required variables id's
//var otp=document.getElementById("otp");
var Submit1 = document.getElementById("submit1");

function valid(){
    event.preventDefault();
var mobile=document.getElementById("mobile"); //registering all the required variables id's for mobile and otp
mobile=mobile.value;
otp=document.getElementById("otp");
otp=otp.value;
console.log( typeof Number( mobile[0]));
mob=Number( mobile[0])
len=mobile.length;
var a=false;
if(mob>5 && len===10){
   
    a=true;
 }
else{
    alert("enter valid number")
    Submit1.reset();  
}
var fl=false;
if(otp.length===4)
    {
    
        fl=true;
    }

    else{
        alert("Enter valid otp of length 4 digits")
        Submit1.reset(); 
    }
if(a && fl ===true){
    let userdata=[];
    userdata=JSON.parse(localStorage.getItem("list1"))?JSON.parse(localStorage.getItem("list1")):[]
    if(userdata.some((v)=>{return v.mobile==mobile && v.otp==otp}))
    {alert("Login Success");}                  //in case of both the true conditions.......success message is shown
    else{alert('Login Failed');}   
}


Submit1.reset();
}     //in case of both the false conditions.......invalid message is shown

//var formSubmit1=document.getElementById("submit2");   
var Submit2 = document.getElementById("submit2");
function valid1()
{
    event.preventDefault();
var email=document.getElementById("email"); 
var email=email.value;                             //registering all the required variables id's      
var password=document.getElementById("password");
var password=password.value;
var user_data1=[];

var f2=false;
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) 
{     f2=true;   }   
else 
{ alert("You have entered an invalid email address!")  } 
if(f2===true)
{
user_data1=JSON.parse(localStorage.getItem("list1"))?JSON.parse(localStorage.getItem("list1")):[]  

if(user_data1.some((v)=>{return v.email==email && v.password==password})) //verifying stored email and password
{alert("Success");  }            //in case of true condition...success message is displayed

else{alert('Invalid'); }  //in case of false condition...Invalid message is displayed
}
Submit2.reset();
}


