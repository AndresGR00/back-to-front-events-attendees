const eventRouter = require('express').Router();
const eventController = require('../controllers/event.controller');
const { isAuth, isAdmin } = require('../../middlewares/auth');
const { uploadPosters } = require('../../middlewares/uploadImgCloudinary');

eventRouter.get('/events', eventController.getAllEvents);
eventRouter.get('/events/:id', eventController.getEventById);
eventRouter.post('/user/events', [isAuth], uploadPosters.fields([{name: "poster"}]), eventController.createEvent);
eventRouter.patch('/update-poster/:id', uploadPosters.fields([{name: "poster"}]), eventController.updatePoster);
eventRouter.delete('/delete-event/:id', [isAdmin], eventController.removeEvent);
eventRouter.post('/user/attendees/:eventId/:userId', /* [isAuth], */ eventController.userConfirmation);
eventRouter.post('/attendant/attendees/:eventId/:attendantId', eventController.attendantConfirmation);

module.exports = eventRouter;