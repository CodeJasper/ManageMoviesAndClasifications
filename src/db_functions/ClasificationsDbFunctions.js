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

async function deletaClasificationFromDB(id) {
  const response = await ClasificationModel.findByIdAndDelete(id);
  return response;
}

async function updateClasificationFromDB(id, clasification) {
  const newClasification = new ClasificationModel({
    id,
    name: clasification.name,
  });

  const response = await ClasificationModel.findByIdAndUpdate(
    newClasification.id,
    { name: newClasification.name },
    {
      useFindAndModify: false,
    }
  );
  return response;
}

module.exports = {
  registerClasificationToDB,
  getClasificationsFromDB,
  deletaClasificationFromDB,
  updateClasificationFromDB,
};
