const express = require('express');
const router = express.Router();

const productController = require('../controllers/addProduct');

router.get("/allproduct", productController.shop);

module.exports = router;