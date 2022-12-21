
var count=0;
users=[
    {name:"",password:""}
];

function adduser()
{
    var namehere=document.getElementById("name").value;
    var nameempty=document.getElementById("emptyname");
    var passwordhere=document.getElementById("password").value;
    var passempty=document.getElementById("emptypassword");
    // var num=document.getElementById("num");
    // var numempty=document.getElementById("emptynum");


    var form=document.getElementById("form");
    form.addEventListener('submit', e =>{
        e.preventDefault();
    })
    if(!namehere)
    {
        nameempty.innerHTML="Enter name";
        return false;
    }
    else{

        nameempty.innerHTML="";
}
    
    if(!passwordhere)
    {
        passempty.innerHTML="Enter password";
        return false;
    }
    else{
        nameempty.innerHTML="";
    }

    users.push({name:namehere,password:passwordhere});
    alert("New user added");
    // console.log(users[count].name,users[count].password);
    count++;
    // if(length(num.value)>5)
    // {
    //     numempty.innerHTML="Too small";
    //     return false;
    // }
    // else{
    //     numempty.innerHTML="";

    // }
    for(var i=0;i<count;i++)
    console.log(users[i].name,users[i].password);
    
    // document.write("Name: "+users[i].name,"   Password: "+users[i].password);
    // document.write("Name: ",namehere,"   Password: ",passwordhere);
}

function existing()
{
    var s=document.getElementById('form00');
    s.addEventListener('submit',e=>{
        e.preventDefault();
    })
    var x=document.getElementById("uname");
    var y=document.getElementById("up");
    var f=0;
    console.log("k",count);
    for(var j=0;j<count;i++)
    {
        if(users[j].name==x && users[j].password==y)
        {
            alert("Login successful");
            f=1;
        }
    }
    if(f==0)
    {
        alert("User not found");
    }
}


function display()
{
    window.location.replace('display.html');
}


function getdata()
{
    // alert("kkkkkkkk");

    // window.location.replace('display.html');
    var p=document.getElementById('datadisplay');
    p.innerHTML="";
    for(var i=0;i<count;i++)
    {
    //    console.log(p);
        p.insertAdjacentText('beforeend', ' ');

        p.insertAdjacentText('beforeend', users[i].name);
        p.insertAdjacentText('beforeend', ' ');

        p.insertAdjacentText('beforeend', users[i].password);
        p.innerHTML+="<br>";
    }
    console.log(i);
}

function update()
{
    var name=document.getElementById('oldname').value;
    var newpassword=document.getElementById('newpassword').value;
    for(var i=0;i<count;i++)
    {
        if(users[i].name==name)
        {
            users[i].password=newpassword;

        }
    }
    
}