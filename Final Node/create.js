const mysql=require("mysql");
const ex=require("express");
const app=ex();

// var con=mysql.createConnection({

//     host:'127.0.0.1',
//     user:'root',
//     password:''
// });

// con.connect(function(err){
//     if (err) throw err;
//     console.log("connected");
//     var q="CREATE database flights";
//     con.query(q,function(err,result){
//         console.log("Database created");
//     });
// });


var con=mysql.createConnection({

    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'flights'
});

var cq="create table flight (name varchar(11),ID int(11),src varchar(11),dest varchar(11),price int(11))";
con.query(cq,function(err,result){

    console.log("Tsble created");

});

