import e from "express";
require("dotenv").config();
import viewEngine from "./config/viewEngine";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
var cors = require("cors");

const app = e();
viewEngine(app);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
initApiRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Back end Running the port " + PORT);
});
