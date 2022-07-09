import userRouter from '#Routes/user.routes.js';
import express from 'express';

const expressApp = express();

// TODO Añadir los middlewares globales a todas las request, rutas ...
expressApp.use(express.json());
expressApp.use('/user', userRouter);

export default expressApp;
