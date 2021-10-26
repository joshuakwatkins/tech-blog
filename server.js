const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const sequelize = require("./config/connection.js");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`APP LISTENING ON PORT ${PORT}`);
  });
});
