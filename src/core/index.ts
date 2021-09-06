import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { connect } from "mongoose";


import config from "../config";
import router from "../router";
import errorHandler from "../middleware/error";


// respond with "hello world" when a GET request is made to the homepage

export default (async () => {
  const app = express();
  const routes = await router();


  app.use(bodyParser.json());
  app.use(morgan("dev"));

  app.use(routes);
  app.use(errorHandler);

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
