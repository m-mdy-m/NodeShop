exports.getHome = (req, res) => {
  res.render("home", {
    path: req.path,
  });
};
