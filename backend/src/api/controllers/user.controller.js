const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const { generateSign } = require("../../config/jwt");
const { deleteImg } = require("../../utils/deleteImgCloudinary");
const { defaultAvatar } = require("../../utils/defaultPictures");
const Attendant = require("../models/attendant.model");
const Event = require("../models/event.model");

//Get All
const getAllUser = async (req, res, next) => {
  try {
    const allUsers = await User.find().populate("confirmedEvents");
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(404).json("Users not found");
  }
};

//Get User By Id
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json("No user has been found with this id");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

//Register - Only allows non admin users to register
const registerUser = async (req, res, next) => {
  try {
    const existingAttendant = await Attendant.findOne({
      email: req.body.email,
    });
    if (existingAttendant) {
      const newUser = new User({
        name: existingAttendant.name,
        email: existingAttendant.email,
        password: req.body.password,
        avatar: req.body.avatar || existingAttendant.avatar,
        rol: "isUser",
        confirmedEvents: existingAttendant.confirmedEvents,
      });
      const createNewUser = await newUser.save();

      try {
        await Attendant.deleteOne({ _id: existingAttendant._id });
      } catch (removeError) {
        return res
          .status(500)
          .json({
            error: "Error removing existing Attendant",
            details: removeError.message,
          });
      }

      const token = generateSign(createNewUser._id);
      return res.status(201).json({ user: createNewUser, token });
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
      rol: "isUser" /* req.body.rol */,
      confirmedEvents: req.body.confirmedEvents,
    });
    const userDuplicated = await User.findOne({ email: req.body.email });
    if (userDuplicated) {
      return res.status(400).json({error: "This user already exists"});
    }
    if (req.files && req.files.avatar) {
      newUser.avatar = req.files.avatar[0].path;
    }
    const createNewUser = await newUser.save();

    const token = generateSign(createNewUser._id);
    return res.status(201).json({ user: createNewUser, token });
  } catch (error) {
    return res.status(404).json({ error: "There was an error registering the user"});
  }
};

//Login
const loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "Email or password is incorrect" });
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id);
      return res.status(200).json({ user, token });
    } else {
      return res.status(400).json({ error: "Email or password is incorrect" });
    }
  } catch (error) {
    return res.status(400).json({ error: "Error logging in" });
  }
};

//Patch - Only avaliable for change the avatar
const updateAvatar = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!req.files) {
      return res.status(400).json("No new image provided");
    }
    const user = await User.findById(id);
    const oldAvatarUrl = user.avatar;

    const updatedUserAvatar = await User.findByIdAndUpdate(
      id,
      { avatar: req.files.avatar[0].path },
      { new: true }
    );
    if (oldAvatarUrl && oldAvatarUrl !== defaultAvatar) {
      deleteImg(oldAvatarUrl);
    }
    return res.status(200).json(updatedUserAvatar);
  } catch (error) {
    return res.status(400).json("Could not update avatar");
  }
};

//Delete
const removeUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    deleteImg(deletedUser.avatar);
    return res.status(200).json("User deleted");
  } catch (error) {
    return res.status(400).json("Error deleting user");
  }
};

module.exports = {
  getAllUser,
  getUserById,
  registerUser,
  loginUser,
  updateAvatar,
  removeUser,
};
