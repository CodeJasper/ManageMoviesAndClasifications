const clasificationsDbFunctions = require("../db_functions/ClasificationsDbFunctions");

async function registerClasification(clasification) {
  return await clasificationsDbFunctions.registerClasificationToDB(
    clasification
  );
}

async function getClasifications() {
  return await clasificationsDbFunctions.getClasificationsFromDB();
}

module.exports = {
  registerClasification,
  getClasifications,
};
