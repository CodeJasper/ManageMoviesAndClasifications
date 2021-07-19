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

router.put(
  `${routesConstants.routesClasifications.subRoutes.update}/:id`,
  async (req, res) => {
    if (clasification.name !== "") {
      const response = await clasificationController.updateClasifications(
        req.params.id,
        req.body
      );
      res.send(response);
    } else {
      res.send(null);
    }
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

router.delete(
  routesConstants.routesClasifications.subRoutes.delete + "/:id",
  async (req, res) => {
    const id = req.params.id;
    const response = await clasificationController.deleteClasifications(id);
    res.send(response);
  }
);

module.exports = router;
