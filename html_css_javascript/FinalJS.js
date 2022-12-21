

let name="shreyas";
//Using alert popup
function sayhello()
{
    alert("Hello to YOU");
    console.log("Hello");
}
//Using confirm popup 
function getcon()
{
    var retval=confirm("Do you want to continue?");
    if(retval==true)
    {
        document.write("Continue");
        return true;
    }
    else{
        document.write("Dont Continue");
        return false;
    }
}
//Using prompt popup
function promptme()
{
var inp=prompt("Input name");
if(inp=="")
{
}
else  if(inp!=null)
{
    document.write("Welcome ",inp);
}

}

// class data{
// obj=[{fname:"",lname:"",age:number}];

//  adddata()
// {
//     console.log("function");
//     var lfname=document.getElementById("fname");
//     var llname=document.getElementById("lname");
//     var lage=document.getElementById("age");
//     this.obj.push({fname:lfname,lname:llname,age:lage});
//     console.log(this.obj);
// }
// }
// class data{
// }



function adddata()
{
    console.log("function");
    var lfname=document.getElementById("fname").value;
    var llname=document.getElementById("lname").value;
    var lage=document.getElementById("age").value;
    // this.obj.push({fname:lfname,lname:llname,age:lage});
    console.log(lfname,llname,lage);
    
    if(lage>0 && lage<111 && lfname=="Shree" && llname=="Hari")
    {
    document.write(lfname,llname,lage);
    window.location.href="new.html";


    }
    else
    document.write("Invalid user");
}