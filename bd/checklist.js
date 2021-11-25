module.exports = (sequelize, Datatypes) => {
    const Checklist = sequelize.define('Checklist',{
        id:{
            type: Datatypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        notaId:{
            type:Datatypes.INTEGER,
            allowNull:false,
        },
        descricao:{
            type:Datatypes.TEXT,
            allowNull:false,
        },
        concluida:{
            type:Datatypes.BOOLEAN,
            allowNull:false,
        },
         
    },
    {
        tableName:'checklist',
        timestamps:false,
    },
    
    );
    
    return Checklist;
    };
