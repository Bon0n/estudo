const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemadecadastro', 'root','R0omArmY', {
    host: 'localhost',
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: Sequelize.TEXT
});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

/*
Postagem.create({
    titulo: "Chaves",
    conteudo: "Programa de Tv"
});
*/

Usuario.create({
    nome: "Andrei",
    sobrenome: "Bonon",
    idade: 18,
    email: "a@gmail.com"
});