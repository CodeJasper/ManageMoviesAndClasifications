const express = require("express");
const router = express.Router();

router.get("/lista-clasificaciones", (req, res) => {
  res.render("clasifications/listClasifications");
});

router.get("/registrar-clasificacion", (req, res) => {
  res.render("clasifications/registerClasification");
});

router.get("/actualizar-clasificacion", (req, res) => {
  res.render("clasifications/updateClasification");
});

module.exports = router;
