const express = require('express');
const router = express.Router();

const addProductController = require('../controllers/addProduct');

// /admin/add-product => GET
router.get("/add-product", addProductController.getProduct);

// /admin/add-product => POST
router.post("/add-product", addProductController.postProduct);

module.exports = router;