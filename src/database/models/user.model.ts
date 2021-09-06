import { Schema, model } from "mongoose";
import { defaultConf } from "../config";

export interface Profile extends Document {
  nickname: string;
  avatar?: string;
  firstname?: string;
  lastname?: string;
}

export interface IUser extends Document {
  email: string;
  username: string;
  profile: Profile
}

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
    type: {
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
    },
    required: true,
  }
}, defaultConf);

export default model<IUser>("user", UserSchema);