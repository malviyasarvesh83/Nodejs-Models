const express = require("express");
const router = express.Router();

const successController = require('../controllers/addProduct');

router.get("/success", successController.getSuccess);

module.exports = router;