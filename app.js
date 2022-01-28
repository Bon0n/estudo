//Config Express - Usado para subir servidor html
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//Config Sequelize
const Sequelize = require("sequelize");
const sequelize = new Sequelize('sistemadecadastro','root','R0omArmy',{
    host: 'localhost',
    dialect: 'mysql'
});

//Config
    //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars')

app.listen(8081, function(){
    console.log("O Servidor está rodando na porta 8081");
});