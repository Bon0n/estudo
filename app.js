const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req,res){
    res.send("Isso aqui e sobre nos seu cuzao");
});

app.get("/blog", function(req,res){
    res.send("Te amo!");
});

app.get("/ola/:nome/:cargo", function(req,res){
    res.send(req.params);
});

app.listen(8081, function(){
    console.log("O Servidor está rodando na porta 8081");
});