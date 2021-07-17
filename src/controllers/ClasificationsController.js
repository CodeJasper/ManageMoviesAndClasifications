const clasificationsDbFunctions = require("../db_functions/ClasificationsDbFunctions");

async function registerClasification(clasification) {
  return clasificationsDbFunctions.registerClasificationToDB(clasification);
}

module.exports = {
  registerClasification,
};
