const { User } = require("../models");

const userData = [
  {
    name: "Jung",
  },
  {
    name: "Travis",
  },
  {
    name: "Paul",
  },
  {
    name: "Andres",
  },
  {
    name: "Josh",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
