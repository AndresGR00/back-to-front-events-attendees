const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    avatar: { type: String, required: true, trim: true, default: "#" },
    rol: {
      type: String,
      enum: ["isUser", "isAdmin"],
      required: false,
      trim: true,
      default: "isUser",
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);
userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model("User", userSchema, "users");
module.exports = User;
