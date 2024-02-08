const { defaultPoster } = require("../../utils/defaultPictures");
const Event = require("../models/event.model");
const User = require("../models/user.model");
const { deleteImg } = require("../../utils/deleteImgCloudinary");
const Attendant = require("../models/attendant.model");

//Get All
const getAllEvents = async (req, res, next) => {
  try {
    const allEvents = await Event.find().populate('usersConfirmed').populate('attendeesConfirmed');
    return res.status(200).json(allEvents);
  } catch (error) {
    return res.status(404).json("Events not found");
  }
};

//Get Event by Id
const getEventById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id).populate('usersConfirmed').populate('attendeesConfirmed');
    if (event) {
      return res.status(200).json(event);
    } else {
      return res.status(404).json("No event has been found with this id");
    }
  } catch (error) {
    return res
      .status(404)
      .json("Something went wrong searching for event by id");
  }
};

//Post event - Only users (with auth.js)
const createEvent = async (req, res, next) => {
  try {
    const newEvent = new Event({
      title: req.body.title,
      date: req.body.date,
      location: req.body.location,
      description: req.body.description,
      poster: req.body.poster,
      usersConfirmed: req.body.usersConfirmed,
      attendeesConfirmed: req.body.attendeesConfirmed,
    });
    const eventDuplicated = await Event.findOne({ title: req.body.title });
    if (eventDuplicated) {
      return res.status(400).json("This event already exists");
    }
    if (req.files && req.files.poster) {
      newEvent.poster = req.files.poster[0].path;
    }
    const createNewEvent = await newEvent.save();
    return res.status(201).json(createNewEvent);
  } catch (error) {
    console.log(error);
    return res.status(404).json("There was an error creating the event");
  }
};

//Patch - Only avaliable for change the poster
const updatePoster = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!req.files) {
      return res.status(400).json("No new image provided");
    }
    const event = await Event.findById(id);
    const oldEventUrl = event.poster;

    const updatedEventPoster = await Event.findByIdAndUpdate(
      id,
      { poster: req.files.poster[0].path },
      { new: true }
    );
    if (oldEventUrl && oldEventUrl !== defaultPoster) {
      deleteImg(oldEventUrl);
    }
    return res.status(200).json(updatedEventPoster);
  } catch (error) {
    console.log(error);
    return res.status(400).json("Could not update the poster");
  }
};

//Post - Un usuario confirma su asistencia a un evento
//En el array de confirmed del evento, metemos la id del usuario
//En el array de eventos a los que asistira del user, metemos la id del evento
const userConfirmation = async (req, res, next) => {
  try {
    const { eventId, userId } = req.params;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json("Event not found");
    }
    if (event.usersConfirmed.includes(userId)) {
      return res
        .status(400)
        .json("This user is already registered for the event");
    }
    event.usersConfirmed.push(userId);
    await event.save();

    const user = await User.findById(userId);
    user.confirmedEvents.push(eventId);
    await user.save();

    return res.status(200).json("User signed up for the event");
  } catch (error) {
    return res.status(500).json("Error when signing up for the event");
  }
};

//Post - Attendant confirma su asistencia al evento
const attendantConfirmation = async (req, res, next) => {
  try {
    const { eventId, attendantId } = req.params;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json("Event not found");
    }
    if (event.attendeesConfirmed.includes(attendantId)) {
      return res
        .status(400)
        .json("This attendand is already registered for the event");
    }
    event.attendeesConfirmed.push(attendantId);
    await event.save();

    const attendant = await Attendant.findById(attendantId);
    attendant.confirmedEvents.push(eventId);
    await attendant.save();

    return res.status(200).json("Attendant signed up for the event");
  } catch (error) {
    return res.status(500).json("Error when signing up for the event");
  }
};

//Delete
const removeEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    deleteImg(deletedEvent.poster);
    return res.status(200).json("Event deleted");
  } catch (error) {
    return res.status(400).json("Error deleting event");
  }
};

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updatePoster,
  userConfirmation,
  attendantConfirmation,
  removeEvent,
};
