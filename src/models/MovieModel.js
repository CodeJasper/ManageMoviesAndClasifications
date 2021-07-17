const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  id: String,
  name: String,
  director: String,
  clasification: String,
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
