const { Sequelize, DataTypes } = require ('sequelize');
const {request} = require ('express');
const inicializarNota = require("./Nota");
const inicializarCheckList = require("./Checklist");
const inicializarUsuario = require("./Usuario");
let bd = {};

const options = {
    username: "admin",
    password: "notes123",
    database: "notes",
    dialect: "mysql",
    host: "notes.cgssmrnlwpdu.us-east-2.rds.amazonaws.com",
};

const sequelize = new Sequelize (options);

sequelize.authenticate().then(() => {
    console.log("Conectado ao Banco" + options.database)
}).catch(erro => {
    console.log("Erro ao se conectar ao banco" + options.database)
    console.log(erro);
});

const Usuario = inicializarUsuario(sequelize,DataTypes);
const Nota = inicializarNota(sequelize,DataTypes);
const Checklist = inicializarCheckList(sequelize,DataTypes);

bd ={Usuario, Nota, Checklist};


bd.Sequelize = Sequelize;
module.exports = bd;
