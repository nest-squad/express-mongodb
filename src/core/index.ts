import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { connect } from "mongoose";


import config from "../config";

export default (async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(morgan("dev"));

  const PORT = config.app.port;
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Listening ${PORT}`);
  });
  try {
    connect(config.mongo.url);
    console.log("Mongo connection Successful");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
