const router = require("express").Router();
const travelController = require("../../controllers/travelController");

// Matches with "/api/travel"
router.route("/journal")
  .get(travelController.findAll)
  .post(travelController.create);

// Matches with "/api/travel/:id"
router
  .route("/journal/:id")
  .get(travelController.findById)
  .put(travelController.update)
  .delete(travelController.remove);

module.exports = router;
