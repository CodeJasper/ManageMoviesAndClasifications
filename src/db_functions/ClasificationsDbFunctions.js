const ClasificationModel = require("../models/ClasificationModel");

async function registerClasificationToDB(clasification) {
  const newClasification = new ClasificationModel({ ...clasification });
  const response = await ClasificationModel.create(newClasification);
  return response;
}

async function getClasificationsFromDB() {
  const response = await ClasificationModel.find();
  return response;
}

module.exports = {
  registerClasificationToDB,
  getClasificationsFromDB,
};
