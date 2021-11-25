module.exports = (sequelize, Datatypes) => {
    const Nota = sequelize.define('Nota',{
        id:{
            type: Datatypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        usuarioId:{
            type:Datatypes.INTEGER,
            allowNull:false,
            references:{
                model:"usuario",
                key:"id",
            },
        },
        titulo:{
            type:Datatypes.STRING,
            allowNull:true,
        },
        descricao:{
            type:Datatypes.TEXT,
            allowNull:false,
        }, 
    },
    {
        tableName:'nota',
        timestamps:false,
    },
    );
    
    return Nota;
    };
    