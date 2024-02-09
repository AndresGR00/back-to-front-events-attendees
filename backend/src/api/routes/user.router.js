const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');
const { isAuth, isAdmin } = require('../../middlewares/auth');
const { uploadAvatars } = require('../../middlewares/uploadImgCloudinary');

userRouter.get('/all-users', userController.getAllUser);
userRouter.post('/register', uploadAvatars.fields([{name: "avatar"}]), userController.registerUser); //Auth?
userRouter.post('/login', uploadAvatars.none(), userController.loginUser) //Auth?
userRouter.patch('/update-avatar/:id', [isAuth],  uploadAvatars.fields([{name: "avatar"}]), userController.updateAvatar);
userRouter.delete('/delete-user/:id', [isAdmin], userController.removeUser);

module.exports = userRouter;

//Para que al pasar los datos en el login funcione con multipar form data, hay que agregar el
//uploadAvatars.none(), sino, solo funciona por JSON