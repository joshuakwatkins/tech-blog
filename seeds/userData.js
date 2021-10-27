const { User } = require("../models");

const userData = [
  {
    name: "Jung",
    password: 12345678,
  },
  {
    name: "Travis",
    password: 12345678,
  },
  {
    name: "Paul",
    password: 12345678,
  },
  {
    name: "Andres",
    password: 12345678,
  },
  {
    name: "Josh",
    password: 12345678,
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
