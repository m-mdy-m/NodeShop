const Product = require("../models/Product");
exports.GetProducts = (req, res) => {
  res.render("shop/add-products", {
    TitlePage: "SHOP",
    path: req.path,
  });
};
exports.PostProducts = (req, res) => {
  console.log('req =>',req.body);
  const title = req.body.title;
  const img = req.body.image;
  const price = req.body.price;
  const description = req.body.description;
  const products = new Product(null, title, img, price, description);
  products.save();
  res.redirect("/");
};
