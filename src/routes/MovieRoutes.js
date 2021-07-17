const express = require("express");
const router = express.Router();

router.get("/lista", (req, res) => {
  res.render("movies/listMovie");
});

router.get("/actualizar", (req, res) => {
  res.render("movies/updateMovie");
});

router.get("/registrar", (req, res) => {
  res.render("movies/registerMovie");
});

module.exports = router;
