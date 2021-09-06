import express, { Router } from "express";
import { db } from "../database";


const router = Router();
const app = express();


export default async () => {
  // Subroute mean /v1/users
  router.get("/users", async (req, res, next) => {
    try {
      const users = await db.User.find();
      res.json(users);
    } catch (err){
      next(err);
    }
  });

  // Outside route
  app.get("/", function (req, res) {
    res.send("hello world");
  });

  // Version foward
  app.use("/v1", router);

  return app;
};