import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  age: {
    required: false,
    type: Date
  },
  email: {
    lowercase: true,
    required: true,
    type: String
  },
  fullName: {
    required: true,
    type: String
  },
  username: {
    required: true,
    type: String,
    unique: true
  },

  password: {
    required: true,
    type: String
  }
});

export default mongoose.model("User", UserSchema);
