const mongoose = require("mongoose");
const { defaultPoster } = require('../../utils/defaultPictures');

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    date: { type: Date, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    poster: { type: String, required: true, trim: true, default: defaultPoster },
    usersConfirmed: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    attendeesConfirmed: [{ type: mongoose.Types.ObjectId, ref: "Attendant" }]
  },
  {
    timestamps: true,
    collection: "events",
  }
);

const Event = mongoose.model("Event", eventSchema, "events");
module.exports = Event;