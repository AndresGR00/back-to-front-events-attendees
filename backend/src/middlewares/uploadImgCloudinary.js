const cloudinary = require("../config/cloudinary");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const posterStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Proyecto_10/Events",
    allowedFormats: ["jpg", "jpeg", "webp", "png", "gif"],
  },
});

const avatarStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Proyecto_10/Avatars",
    allowedFormats: ["jpg", "jpeg", "webp", "png", "gif"],
  },
});

const uploadPosters = multer({ storage: posterStorage });
const uploadAvatars = multer({ storage: avatarStorage });

module.exports = { uploadPosters, uploadAvatars };
