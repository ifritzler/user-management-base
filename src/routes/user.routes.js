import userJWTDTO from '#Validations/user/user-jwt.dto.js';
import userLoginDTO from '#Validations/user/user-login.dto.js';
import userRegisterDTO from '#Validations/user/user-register.dto.js';
import userUnRegisterDTO from '#Validations/user/user-unregister.dto.js';
import userUpdateDataDTO from '#Validations/user/user-update-data.dto.js';
import userUpdateEmailDTO from '#Validations/user/user-update-email.dto.js';
import userUpdatePasswordDTO from '#Validations/user/user-update.password.dto.js';
import { Router } from 'express';

const userRouter = Router();

userRouter.post('/register', userRegisterDTO);
userRouter.post('/login', userLoginDTO);
userRouter.get('/profile', userJWTDTO);
userRouter.patch('/update-data', userJWTDTO,userUpdateDataDTO);
userRouter.patch('/update-email', userJWTDTO,userUpdateEmailDTO);
userRouter.patch('/update-password', userJWTDTO,userUpdatePasswordDTO);
userRouter.delete('/unregister', userJWTDTO,userUnRegisterDTO);

export default userRouter;
