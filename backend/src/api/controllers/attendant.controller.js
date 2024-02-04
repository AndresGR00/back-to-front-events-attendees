const Attendant = require("../models/attendant.model");
const { deleteImg } = require("../../utils/deleteImgCloudinary");

//Get All
const getAllAttendees = async (req, res, next) => {
  try {
    const allAttendees = await Attendant.find();
    return res.status(200).json(allAttendees);
  } catch (error) {
    return res.status(404).json("Attendees not found");
  }
};

//Get Attendant By Id
const getAttendantById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const attendant = await Attendant.findById(id);
    if (attendant) {
      return res.status(200).json(attendant);
    } else {
      return res.status(400).json("No attendant has been found with this id");
    }
  } catch (error) {
    return res
      .status(404)
      .json("Something went wrong searching for attendant by id");
  }
};

//Post Attendant
const createAttendant = async (req, res, next) => {
  try {
    const newAttendant = new Attendant({
      name: req.body.name,
      email: req.body.email,
      isRegister: req.body.isRegister,
      avatar: req.body.avatar,
      confirmedEvents: req.body.confirmedEvents,
    });
    const attendantDuplicated = await Attendant.findOne({
      email: req.body.email,
    });
    if (attendantDuplicated) {
      newAttendant.isRegister = true;
      return res.status(400).json("This attendant already exists");
    }
    if (req.files && req.files.avatar) {
      newAttendant.avatar = req.files.avatar[0].path;
    }
    const createNewAttendant = await newAttendant.save();
    return res.status(201).json(createNewAttendant);
  } catch (error) {
    return res.status(404).json("There was an error creating the attendant");
  }
};

//Patch
const updateAvatarAttendant = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!req.files) {
      return res.status(400).json("No new image provided");
    }
    const attendant = await Attendant.findById(id);
    const oldAvatarUrl = attendant.avatar;

    const updatedAttendantAvatar = await User.findByIdAndUpdate(
      id,
      { avatar: req.files.avatar[0].path },
      { new: true }
    );
    if (oldAvatarUrl && oldAvatarUrl !== defaultAvatar) {
      deleteImg(oldAvatarUrl);
    }
    return res.status(200).json(updatedAttendantAvatar);
  } catch (error) {
    return res.status(400).json("Could not update avatar");
  }
};

//Delete
const removeAttendant = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAttendant = await Attendant.findByIdAndDelete(id);
    deleteImg(deletedAttendant.avatar);
    return res.status(200).json("Attendant deleted");
  } catch (error) {
    return res.status(400).json("Error deleting attendant");
  }
};

module.exports = {
  getAllAttendees,
  getAttendantById,
  createAttendant,
  updateAvatarAttendant,
  removeAttendant,
};
