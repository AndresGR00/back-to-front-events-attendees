const mongoose = require("mongoose");
const { defaultAvatar } = require("../../utils/defaultPictures");

const attendantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    isRegister: { type: Boolean, required: true, trim: true, default: false },
    avatar: { type: String, required: true, trim: true, default: defaultAvatar },
    confirmedEvents: [{ type: mongoose.Types.ObjectId, ref: "Event" }],
  },
  {
    timestamps: true,
    collection: "attendees",
  }
);

const Attendant = mongoose.model("Attendant", attendantSchema, "attendees");
module.exports = Attendant;
