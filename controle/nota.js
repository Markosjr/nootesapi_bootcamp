const controller = {};
const {Nota, Usuario, Checklist, sequelize} = require("../bd");

controller.getNota = async (id) => {
   const result = await Nota.findOne({
        where: {
           id,
        },
        include: [
           {
              model: Usuario,
              as: "usuario",
           },
           {
              model: Checklist,
              as: "checklists",
           },
        ],
     });

     return result;

};



module.exports = controller;