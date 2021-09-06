import { config } from "dotenv";
config();


if (!process.env.MONGO_URL) throw new Error("Өгөгдлийн сангаа холбоно уу.");
export default {
  app: {
    port: Number(process.env.APP_PORT) | 8000
  },
  mongo: {
    url: process.env.MONGO_URL
  }
};