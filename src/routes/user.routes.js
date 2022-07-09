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
userRouter.get('/profile');
userRouter.patch('/update-data', userUpdateDataDTO);
userRouter.patch('/update-email', userUpdateEmailDTO);
userRouter.patch('/update-password', userUpdatePasswordDTO);
userRouter.delete('/unregister', userUnRegisterDTO);

export default userRouter;
