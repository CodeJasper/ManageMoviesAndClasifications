const ClasificationModel = require("../models/ClasificationModel");

async function registerClasificationToDB(clasification) {
  const newClasification = new ClasificationModel({ ...clasification });
  const response = await ClasificationModel.create(newClasification);
  return response;
}

module.exports = {
  registerClasificationToDB,
};
