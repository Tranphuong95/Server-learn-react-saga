import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodeCron from "node-cron";

import routerUsers from "./routes/users";

dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("wellcome to memories server")
});

app.use("/", routerUsers);
const PORT = process.env.PORT || 8080;
// const CONNECTION_URL = process.env.CONNECTION_URL;

app.listen(PORT, () => console.log(`Connected to Database, Server running on port ${PORT}`))
// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     // useUnifiedTopology: true,
//     // useFindAndModify: false,
//   })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Connected to Database, Server running on port ${PORT}`))
//   )
//   .catch((err) => console.error("An error has occured", err.message));
// mongoose.set("useUnifiedTopology", false);