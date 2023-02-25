const express = require("express");
const router = express.Router();

const contactController = require('../controllers/addProduct');

// /admin/add-product => GET
router.get("/contact", contactController.getContact);

// /admin/add-product => POST
router.post("/contact", contactController.postContact);

module.exports = router;
