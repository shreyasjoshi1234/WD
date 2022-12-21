const mysql=require("mysql");
const ex=require("express");
const app=ex();

var con=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'flights'
});

app.use(ex.json());
app.use(ex.urlencoded({extended: true}));

app.get("/",function(req,res){

    res.sendFile("C:/Users/HP/Node/Final Node/loginpage.html");
});

app.post("/",function(req,res){

    var f=0;
    var name=req.body.name;
    var password=req.body.password;
    var cred=[{name:"sj",password:"shrihari"},
                    {name:"sj18",password:"shrihari"},
                    {name:"sj12",password:"shrihari"},
                    {name:"sj15",password:"shrihari"}];
                    for(var i=0;i<cred.length;i++)
                    {
                        if(cred[i].name==name && cred[i].password==password)
                            {
                                f=1;
                            }
                    }

                if(f==1)
                {
                    res.redirect("/form");
                }
                else
                {
                    res.send("Invalid credentials");
                    res.redirect("/");
                }

});

app.get("/form",function(req,res){

    res.sendFile("C:/Users/HP/Node/Final Node/Form.html"); //s

});

app.post("/booked",function(req,res){

    console.log("Booking");
    var allflights=[{s:"H1",d:"H2",ID:1,pr:100},
    {s:"H3",d:"H4",ID:2,pr:100},
    {s:"H5",d:"H6",ID:3,pr:100},
    {s:"H7",d:"H8",ID:4,pr:100}];
    var name=req.body.cname;
    var ID=req.body.cID;
    var num=req.body.ctno;
    var src=allflights[ID-1].s;
    var dest=allflights[ID-1].d;
    var total=num*100;

    qr="INSERT INTO bookings values (?,?,?,?,?)";
    con.query(qr,[name,ID,src,dest,total],function(err,result){
        if (err) throw err; //s
        console.log("Data Inserted");
        res.redirect("/form");
    });
});

app.post("/edit",function(req,res){

    var ID=req.body.ID;
    var newpr=req.body.newpr;
    var newdest=req.body.newdest;
    var ss="UPDATE `flights`.`bookings` SET `price` = ? , `dest`=? WHERE `bookings`.`ID` =? ";
    con.query(ss,[newpr,newdest,ID],function(err,result){
        if (err) throw err;
        console.log("Data edited");
        res.send("Data edited");
        res.redirect("/form");
    });

});

app.post("/search",function(req,res){

    var name=req.body.name;
    var ss="select * from bookings where name=?";
    con.query(ss,[name],function(err,result){
        if (err) throw err;
        console.log("Data fetched");
        console.log(result);
        res.send(result);
        res.redirect("/form");
    });
});
app.listen("10000");