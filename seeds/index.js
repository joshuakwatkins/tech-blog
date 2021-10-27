const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models/");

const seedUser = require("./userData");
const seedBlog = require("./blogData");
const seedComment = require("./commentData");

const seedDB = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedBlog();
  await seedComment();
  process.exit(0);
};

seedDB();
