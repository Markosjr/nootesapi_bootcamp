const express = require("express");
const router = express.Router();

router.get("/:id?",  (req, res) =>{
      if (req.params.id) {
         res.send("Nota ID " + req.params.id);
      } else {
         res.send("Todas as notas");
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