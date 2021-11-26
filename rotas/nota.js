const {Router} = require("express");
const {Nota, Usuario} = require("../bd");
const router = Router();

router.get("/:id?", async (req, res) => {
   const { id } = req.params;
   let resultado;

      if (id) {
         res.send("Nota ID " + id);
      } else {
         resultado = await Nota.findAll({
            include: [
               {
                  model: Usuario,
                  as: "usuario",
               },
            ],
         });

         res.send(resultado);
      }
       
});

router.post("/", (req, res) => {
   res.send("[]");

});

router.put("/:id",  (req, res) => {
   res.send ({});
});

router.delete("/:id",  (req, res) => {
   res.send({});

});

module.exports = router;