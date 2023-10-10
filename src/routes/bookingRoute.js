const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.post("/", bookingController.createBooking);
router.get("/all", bookingController.getAllBooking);
router.get("/:id", bookingController.getBookingById);
router.put("/:id", bookingController.updateBookingById);

module.exports = router;
