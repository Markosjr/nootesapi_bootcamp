const { Sequelize } = require ('sequelize');
const bd = {};

const options = {
    username: "admin",
    password: "notes123",
    database: "notes",
    dialect: "mysql",
    host: "notes.cnotes.cgssmrnlwpdu.us-east-2.rds.amazonaws.comgssm",
};

const sequelize = new Sequelize (options);
sequelize.authenticate().then(() => {
    console.log("Conectado ao Banco" + options.database)
});


