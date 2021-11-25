module.exports = (sequelize, Datatypes) => {
    const Usuario = sequelize.define("Usuario",{
        id:{
            type: Datatypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
         nome:{
          type: Datatypes.STRING,
          allowNull:false,
        },
        email:{
            type:Datatypes.STRING,
            allowNull:false,
        },
        senha:{
            type:Datatypes.STRING,
            allowNull:false,
        },
    },
    {
        tableName:'usuario',
        timestamps:false,
    },
    
 );

return Usuario;

};