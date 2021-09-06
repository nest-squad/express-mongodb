import { Schema, model } from "mongoose";
import { defaultConf } from "../config";

const UserSchema = new Schema({
  username: {
    type    : String,
    unique  : true,
    required: true,
  },
  email: {
    type    : String,
    unique  : true,
    required: true
  },
  profile: {
    nickname: {
      type    : String,
      required: true
    },
    avatar: {
      type    : String,
      required: false
    },
    firstname: {
      type    : String,
      required: false
    },
    lastname: {
      type    : String,
      required: false
    }
  }
}, defaultConf);

export default model("user", UserSchema);