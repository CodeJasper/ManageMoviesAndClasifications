const express = require("express");
const routesConstants = require("../global_constants/routes");
const clasificationController = require("../controllers/ClasificationsController");
const router = express.Router();

router.get(
  routesConstants.routesClasifications.subRoutes.list,
  async (req, res) => {
    const response = await clasificationController.getClasifications();
    res.render("clasifications/listClasifications", {
      clasifications: response,
    });
  }
);

router.get(
  routesConstants.routesClasifications.subRoutes.update,
  (req, res) => {
    res.render("clasifications/updateClasification");
  }
);

router.post(
  routesConstants.routesClasifications.subRoutes.register,
  async (req, res) => {
    const clasification = req.body;
    if (clasification.name !== "") {
      const response = await clasificationController.registerClasification(
        clasification
      );
    }
    res.redirect(
      routesConstants.routesClasifications.name +
        routesConstants.routesClasifications.subRoutes.list
    );
  }
);

module.exports = router;
