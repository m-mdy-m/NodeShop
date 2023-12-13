const Product = require("../models/Product");
exports.GetProducts = (req, res) => {
  res.render("shop/add-products", {
    TitlePage: "SHOP",
    path: req.path,
  });
};
exports.PostProducts = (req, res) => {
  const title = req.body.title;
  const img = req.body.img;
  const price = req.body.price;
  const description = req.body.description;
  console.log(title);
  console.log(img);
  console.log(price);
  const products = new Product(null, title, img, price, description);
  console.log('pro=>', products);
  products.save();
  console.log('ss =>', products.save());
  res.redirect("/");
};
