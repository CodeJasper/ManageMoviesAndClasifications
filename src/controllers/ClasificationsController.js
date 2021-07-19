const clasificationsDbFunctions = require("../db_functions/ClasificationsDbFunctions");

async function registerClasification(clasification) {
  return await clasificationsDbFunctions.registerClasificationToDB(
    clasification
  );
}

async function getClasifications() {
  return await clasificationsDbFunctions.getClasificationsFromDB();
}

async function deleteClasifications(id) {
  return await clasificationsDbFunctions.deletaClasificationFromDB(id);
}

async function updateClasifications(id, clasification) {
  return await clasificationsDbFunctions.updateClasificationFromDB(
    id,
    clasification
  );
}
module.exports = {
  registerClasification,
  getClasifications,
  deleteClasifications,
  updateClasifications,
};
