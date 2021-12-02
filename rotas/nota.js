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
               {
                  model: Checklist,
                  as: "checklists",
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
               {
                  model: Checklist,
                  as: " checklists",
               },
            ],
         });

         
      }
      res.send(resultado);
});

router.post("/", async (req, res) => {
   const {usuarioId, titulo, descricao, checklists} = req.body;
   const transacao = await sequelize.transaction();

   try {
      let nota = await Nota.create({
         usuarioId,
         titulo,
         descricao,
      },
       {
         transaction: transacao,
      }
      );

      let listaCriada = [];

      for (const checklist of checklists) {
        const result = await Checklist.create(
         {
            descricao: checklist.descricao,
            concluida: checklist.concluida,
            notaId: nota.id,
         },
         {
            transaction: transacao,
         }
         );
        
         listaCriada.push(result);
      }

      nota.dataValues.checklists = listaCriada;

      await transacao.commit();

      res.send(nota);

   } catch (erro) {
      await transacao.rollback ();

      res.status(500).send({
         erro,
      });
   }
   res.send("{}");
});

  



router.put("/:id",  (req, res) => {
   res.send ({});
});

router.delete("/:id", async (req, res) => {
   const transacao = await sequelize.transaction();
   const { id } = req.params;
   try {
      await checklist.destroy({
         where: {
            notaId: id,
         },
         transaction: transacao,
      });

      await Nota.destroy ({
         where: {
            id,
         },
         transaction: transacao,
      });

      await transacao.commit();

      res.send(200);
   } catch (erro) {
      await transacao.rollback();

      res.status(500).send({ erro });
   }
  
});

module.exports = router;