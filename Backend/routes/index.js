const routes = require("express").Router();
const tiplog = require("./tipsDetails");

routes.use("/tiplog", tiplog);

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

module.exports = routes;
