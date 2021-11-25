const {Router} = require("express");
const {Usuario} = require('../bd')

const router = Router();

router.get("/",  (req, res) =>{
       res.send([]);
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

router.put("/:id",  (req, res) =>{
   res.send ({});
});

router.delete("/:id",  (req, res) =>{
   res.send({});

});

module.exports = router;