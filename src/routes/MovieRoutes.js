const express = require("express");
const router = express.Router();

router.get("/lista-peliculas", (req, res) => {
  res.render("movies/listMovie");
});

router.get("/actualizar-pelicula", (req, res) => {
  res.render("movies/updateMovie");
});

router.get("/registrar-pelicula", (req, res) => {
  res.render("movies/registerMovie");
});

module.exports = router;
