import userLoginController from '#Controllers/user/user-login.controller.js';
import userProfileController from '#Controllers/user/user-profile.controller.js';
import userRegisterController from '#Controllers/user/user-register.controller.js';
import userUpdateDataController from '#Controllers/user/user-update-data.controller.js';
import userUpdateEmailController from '#Controllers/user/user-update-email.controller.js';
import userUpdatePasswordController from '#Controllers/user/user-update-password.controller.js';
import userJWTDTO from '#Validations/user/user-jwt.dto.js';
import userLoginDTO from '#Validations/user/user-login.dto.js';
import userRegisterDTO from '#Validations/user/user-register.dto.js';
import userUnRegisterDTO from '#Validations/user/user-unregister.dto.js';
import userUpdateDataDTO from '#Validations/user/user-update-data.dto.js';
import userUpdateEmailDTO from '#Validations/user/user-update-email.dto.js';
import userUpdatePasswordDTO from '#Validations/user/user-update.password.dto.js';
import { Router } from 'express';
import userUnRegisterController from '#Controllers/user/user-unregister.controller.js';

const userRouter = Router();

userRouter.post('/register', userRegisterDTO, userRegisterController);
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/profile', userJWTDTO, userProfileController);
userRouter.patch('/update-data', userJWTDTO, userUpdateDataDTO, userUpdateDataController);
userRouter.patch('/update-email', userJWTDTO, userUpdateEmailDTO, userUpdateEmailController);
userRouter.patch('/update-password', userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController);
userRouter.delete('/unregister', userJWTDTO, userUnRegisterDTO, userUnRegisterController);

export default userRouter;
