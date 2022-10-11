const { Sequelize } = require("sequelize");

const { tip_details, user_details, likes, tip_type } = require("./model");
const { Associations } = require("./associations");

const sequelize = new Sequelize("tipology-database", "tipster", "3f4gn04?Q", {
  dialect: "mysql",
  host: "13.234.33.232",
  port: 3306,
});

const modelDefiners = [tip_details, user_details, likes, tip_type];
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}
Associations(sequelize);
module.exports = sequelize;
