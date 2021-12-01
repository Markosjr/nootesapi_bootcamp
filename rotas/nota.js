const {Router} = require("express");
const {Nota, Usuario, Checklist, sequelize} = require("../bd");
const router = Router();

router.get("/:id?", async (req, res) => {
   const { id } = req.params;
   let resultado;

      if (id) {
         resultado = await Nota.findOne({
            where: {
               id,
            },
            include: [
               {
                  model: Usuario,
                  as: "usuario",
               },
            ],
         });
      } else {
         resultado = await Nota.findAll({
            include: [
               {
                  model: Usuario,
                  as: "usuario",
               },
            ],
         });

         
      }
      res.send(resultado);
});

router.post("/", (req, res) => {
   const {usuario, titulo, descricao, checklists} = req.body;
   const transacao = await sequelize.transaction();

   try {
      const nota = await Nota.create({
         usuarioId,
         titulo,
         descricao,
      }, {
         transaction: transacao,
      }
      );

      for (const checklist of checklists) {
         await Checklist.create(
            {
            descricao: checklist.descricao,
            concluida: checklist.concluida,
            notaId: nota.id,
         },
          {
            transaction: transacao,
         }
         );
      }

      await transacao.commit();

      res.send(nota);

   } catch (erro) {
      await transacao.rollback ();

      res.status(500).send({
         erro,
      });
   }

});

   res.send("[]");



router.put("/:id",  (req, res) => {
   res.send ({});
});

router.delete("/:id",  (req, res) => {
   res.send({});

});

module.exports = router;