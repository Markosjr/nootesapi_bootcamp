const {Router} = require("express");
const {Usuario} = require('../bd')

const router = Router();

router.get("/:id?", async (req, res) =>{
   let resultado;

   if (req.params.id) {
      console.log("Buscando usando findAll + where");
     // [resultado] = await Usuario.FindAll({
       //  where: {
           // id: req.params.id,
       //  },
     // }); 
      console.log ("Buscando usando findByPk");
      resultado = await Usuario.findByPk(req.params.id);

      console.log("Buscando usando findOne");

   } else {
      resultado = await Usuario.FindAll();
   }


       res.send(resultado);
});

router.post("/", async (req, res) => {
   const {nome, email, senha} = req.body;
   const [usuario, novoRegistro] = await Usuario.findOrCreate ({
      defaults: {
         nome,
         email,
         senha,
      },
      where: {
         email,
      },
   });

   res.send(usuario);

});

router.put("/:id", async (req, res) =>{
   const {nome, email, senha} = req.body;
   const {id} = req.params;

   await Usuario.update (
      {
      nome,
      email,
      senha
   }, 
   {
     where: {
      id,
     } 
   }
   );

   const usuario = await Usuario.findByPk(id);

   res.send (usuario);

});

router.delete("/:id", async (req, res) =>{
   const {id} = req.params;

   const usuario = await Usuario.destroy({
      where: {
         id,
      },
   });


   res.send({usuario});

});

module.exports = router;