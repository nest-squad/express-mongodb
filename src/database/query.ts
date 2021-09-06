import { db } from "./";
import mongoose from "mongoose";
import config from "../config";

let profile = {
  nickname : "tester",
  lastname : "Tester",
  firstname: "Tester",
};
let userData = {
  username: "tester",
  email   : "tester@gmail.com",
  profile,
};

(async () => {
  await mongoose.connect(config.mongo.url);

  await db.User.create(userData);
  const user = db.User.find().limit(3);

  console.log(user);
})();
