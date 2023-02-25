const path = require("path");
const rootDir = require("../util/path");

const Product = require('../models/addProduct');

exports.getProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postProduct = (req, res, next) => {
  const product = new Product(req.body.product);
  product.save();
  res.redirect("/shop/allproduct");
};

exports.shop = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    console.log("Shop Product : ", products);
    res.sendFile(path.join(rootDir, "views", "shop.html"));
  });
};

exports.getContact = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

exports.postContact = (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop/success");
};

exports.getSuccess = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
