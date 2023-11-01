const express = require("express");
const contactController = require("../controllers/contactController");

const router = express.Router();

router.get("/", contactController.getAllContact);
router.post("/", contactController.createContact);
router.put("/edit-contact/:id", contactController.updateContact);

module.exports = router;
