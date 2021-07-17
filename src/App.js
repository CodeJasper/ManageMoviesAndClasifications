const express = require("express");
const app = express();
const routesConstants = require("./global_constants/routes");
require("dotenv").config();
require("./db_config/mongooseConfig");

const port = process.env.PORT || 8080;

// Midlewares
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static(__dirname + "/public"));

// View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Routes
app.use(routesConstants.routesMovies.name, require("./routes/MovieRoutes"));
app.use(
  routesConstants.routesClasifications.name,
  require("./routes/ClasificationRoutes")
);
app.use("/", (req, res) => {
  res.render("404");
});

// Server run
app.listen(port, () => {
  console.log("Server started");
});
