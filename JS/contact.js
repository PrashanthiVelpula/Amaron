var name=document.getElementById("name");//registering all the variables id's
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var city=document.getElementById("city");
var comment=document.getElementById("comment");
var formSumbit = document.getElementById("submit");
var list1=[];                          //creating new array    
var data=localStorage.getItem("list1");    // printing data from local storage                                   
list1=JSON.parse(data);//parsing data to print
list1=data===null? [] : JSON.parse(data);

if(formSumbit !== null){
    formSumbit.addEventListener("submit", function (event) {         //creating submit button's action
    event.preventDefault();
    var nUser = {};
    var form=new FormData(formSumbit);
    form.forEach(function(value,name){
        nUser[name]=value;
    })
           
    
    // console.log(list1);                                //printing data in console

    var flag=false;
    if(Number(nUser["phone"][0])>5 && (nUser["phone"].length===10))
    {
      
        flag=true;
    }

    else{
        alert("Enter valid mobile number...")
        formSumbit.reset(); 
    }
   
    var f1=false;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(nUser["email"])) 
    {     f1=true;   }   
    else 
    { alert("You have entered an invalid email address!")
        formSumbit.reset();  } 

      if(flag &&  f1 ===true){
          list1.push(nUser);                                             //providing values for localstorage
          localStorage.setItem("list1",JSON.stringify(list1));
          alert("User Added Successfully.!!!"); 
      }
    print();                                         //calling table's print function
   formSumbit.reset();
});
}



var tablelistPrint=document.getElementById("tablelist");     //registering table id

function print(){
    if(tablelistPrint===null)return false;                    //function for storing and printing data in table
    var list2=list1.map(function(value,index){
        var data= `<tr>
        <th scope="row">${index+1} </th>

        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>${value.phone}</td>
        <td>${value.city}</td>
        <td>${value.comment}</td>
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
print();   //calling table's print function
function remove(index){
    var del=confirm("Are you sure?")                          //function for deleting individual row in a table
    if( del==true)
        list1.splice(index,1)                 //using splice method to delete corresponding index element

    alert("User Deleted Successfully");
    print();
    localStorage.setItem("list1",JSON.stringify(list1));     //after deleting updating the list in localstorage

}


