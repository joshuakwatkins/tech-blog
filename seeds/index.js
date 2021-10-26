const sequelize = require("../config/connection");
const seedUser = require("./userData");

const seedDB = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  process.exit(0);
};

seedDB();
