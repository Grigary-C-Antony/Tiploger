const cors = require("cors");
const app = require("express")();
const routes = require("./routes");
const sequelize = require("./database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

//! Configuration

const PORT = process.env.PORT || 5000;
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

sequelize.sync({ force: true });
// sequelize.sync();

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

//! Configuration
