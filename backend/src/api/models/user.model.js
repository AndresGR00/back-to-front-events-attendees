const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { defaultAvatar } = require("../../utils/defaultPictures");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true, trim: true },
    avatar: { type: String, required: false, default: defaultAvatar },
    rol: {
      type: String,
      enum: ["isUser", "isAdmin"],
      required: true,
      trim: true,
      default: "isUser",
    },
    confirmedEvents: [{ type: mongoose.Types.ObjectId, ref: "Event" }],
  },
  {
    timestamps: true,
    collection: "users",
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema, "users");
module.exports = User;
