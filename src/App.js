const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Midlewares
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.static(__dirname + "/public"));

// View Engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");

// Server run
app.listen(port, () => {
  console.log("Server started");
});
