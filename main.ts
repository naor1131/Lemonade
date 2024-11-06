import express from "express";
import cors from "cors";
import routes from "./src/routes/routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

const onServerStart = function () {
  console.log(`»»» Server is running on port ${process.env.PORT}.`);
};

app.listen(process.env.PORT, onServerStart);
