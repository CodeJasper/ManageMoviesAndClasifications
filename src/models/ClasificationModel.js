const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClasificationSchema = new Schema({
  id: String,
  name: String,
});

const Clasification = mongoose.model("Clasification", ClasificationSchema);

module.exports = Clasification;
