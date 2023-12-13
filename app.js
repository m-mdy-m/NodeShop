const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const homeRoutes = require("./routes/home");
const shopRoutes = require("./routes/shop");
const ErrControllers = require("./controllers/err");
const adminRoutes = require("./routes/admin")
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use(homeRoutes);
app.use(adminRoutes)

app.use(ErrControllers.Error404);

app.listen(3000, () => {
  console.log("run server on port 3000");
});
