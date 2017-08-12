var express = require('express');

var app = express();


app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(3000,'127.0.0.1',()=>{
    console.log("Server started...");
})