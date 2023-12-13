const Product = require("../models/Product")

exports.getHome = (req, res) => {
  Product.fetchALL(products =>{
    res.render("home", {
      prods : products,
      TitlePage:'HOME',
      path: req.path,
    });
  })
};