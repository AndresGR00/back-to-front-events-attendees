const mainRouter = require('express').Router();
const userRouter = require('./user.router');
const eventRouter = require('./event.ruter');
const attendantRouter = require('./attendant.router');

mainRouter.use('/', userRouter);
mainRouter.use('/', eventRouter);
mainRouter.use('/', attendantRouter);

module.exports = mainRouter;