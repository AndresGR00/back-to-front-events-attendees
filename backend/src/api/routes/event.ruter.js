const eventRouter = require('express').Router();
const eventController = require('../controllers/event.controller');
const { isAuth, isAdmin } = require('../../middlewares/auth');
const { uploadPosters } = require('../../middlewares/uploadImgCloudinary');

eventRouter.get('/events', eventController.getAllEvents);
eventRouter.get('/events/:id', eventController.getEventById);
eventRouter.post('/user/events', uploadPosters.fields([{name: "poster"}]), eventController.createEvent);
eventRouter.patch('/update-poster/:id', uploadPosters.fields([{name: "poster"}]), eventController.updatePoster);
eventRouter.delete('/delete-event/:id', eventController.removeEvent);
eventRouter.post('/user/attendees/:eventId/:userId', eventController.userConfirmation);

module.exports = eventRouter;