const mainRouter = require('express').Router();
const userRouter = require('./user.router');

mainRouter.use('/', userRouter);

module.exports = mainRouter;