import e from "express";
require("dotenv").config();
import viewEngine from "./config/viewEngine";
import initApiRoutes from "./routes/api";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = e();
const corsConfig = {
  origin: true,
  credentials: true,
};
viewEngine(app);
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
initApiRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT);
