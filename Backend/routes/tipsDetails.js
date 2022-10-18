const tiplog = require("express").Router();
const sequelize = require("../database");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const db = sequelize.models;

tiplog.get("/get", async (req, res) => {
  let tiplogs = await db.tip_details.findAll({});
  res.status(200).send(tiplogs);
});

tiplog.post("/add", upload.array("photos", 12), async (req, res) => {
  //add multer here

  const { title, content } = req.body;
  await db.tip_details.create({ title, content });
  console.log(req.files);
  // res.status(200).send({ success: true });
});
module.exports = tiplog;
