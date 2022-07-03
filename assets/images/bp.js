//Body-Parser
const express = require('express');
const bodyParser = require('body-parser');
const { append } = require('express/lib/response');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.post('/',function(req,res){
    let x = req.body.email;
    res.send("<h1>Hello "+ x +" Your order is placed successfully. Thank You for ordering from us.</h1>");
});

app.get('/',function(req,res){
    res.sendFile(__dirname+"/login.html");
});



app.listen(3000,function(req,res){
    console.log('Bon Appetit');
});
