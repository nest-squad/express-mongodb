import { Schema, model } from "mongoose";
import { defaultConf } from "../config";

const MemberSchema = new Schema({
  team: {
    type    : Schema.Types.ObjectId,
    ref     : "team",
    required: false
  },
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
  phone: {
    type    : String,
    required: false
  },
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
  },
  xp: {
    type    : Number,
    default : 0,
    required: true
  },
  role: [{
    type    : Schema.Types.ObjectId,
    ref     : "role",
    required: true
  }],
  status: {
    type    : String,
    default : "ACTIVE",
    required: true
  },
  status_date: {
    type    : String,
    default : new Date(),
    required: true
  },
  books: [{ type: Schema.Types.ObjectId, ref: "book" }]
}, defaultConf);
export default model("member", MemberSchema);