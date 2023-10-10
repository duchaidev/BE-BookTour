const express = require("express");
const tourController = require("../controllers/tourController");

const router = express.Router();

router.get("/all-tour", tourController.getAllTour);
router.get("/:id", tourController.getOneTour);
router.post("/create-tour", tourController.createTour);
router.put("/edit-tour/:id", tourController.updateTour);
router.delete("/delete-tour/:id", tourController.deleteTour);

module.exports = router;
