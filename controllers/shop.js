exports.GetProducts = (req, res) => {
  res.render("shop/add-products", {
    TitlePage: "SHOP",
    path: req.path,
  });
};
