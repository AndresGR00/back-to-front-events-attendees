const attendantRouter = require('express').Router();
const attendantController = require('../controllers/attendant.controller');
const { isAuth, isAdmin } = require('../../middlewares/auth');
const { uploadAvatars } = require('../../middlewares/uploadImgCloudinary');

attendantRouter.get('/attendees', attendantController.getAllAttendees);
attendantRouter.get('/attendees/:id', attendantController.getAttendantById);
attendantRouter.post('/create-attendant', uploadAvatars.fields([{name: "avatar"}]), attendantController.createAttendant);
attendantRouter.patch('/update-avatar-attendant', uploadAvatars.fields([{name: "avatar"}]), attendantController.updateAvatarAttendant);
attendantRouter.delete('/delete-attendant', attendantController.removeAttendant);

module.exports = attendantRouter
