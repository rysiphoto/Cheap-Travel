const router = require("express").Router();
const travelRoutes = require("./travel");

// travel routes
router.use("/travel", travelRoutes);

module.exports = router;


