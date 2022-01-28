const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//Config Sequelize
const Sequelize = require("sequelize");

// Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Conexão com banco de dados MySql
    const sequelize = new Sequelize('sistemadecadastro','root','R0omArmy',{
        host: 'localhost',
        dialect: 'mysql'
    });
// Rotas
    app.get('/cad', function(req,res){
        res.render('formulario');
    });
    app.post('/add', function(req,res){
        res.send('Formulário recebido');
    });

app.listen(8081, function(){
    console.log("O Servidor está rodando na porta 8081");
});