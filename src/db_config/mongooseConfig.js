const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASWORD}@cluster0.ltucx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongodb conected"))
  .catch((e) => console.log("Mongodb error connection", e));

module.exports = mongoose;
