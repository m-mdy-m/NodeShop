exports.getHome = (req, res) => {
  res.render("home", {
    TitlePage:'HOME',
    path: req.path,
  });
};
