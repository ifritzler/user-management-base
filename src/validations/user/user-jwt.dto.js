import { jwtVerify } from 'jose';

const userJWTDTO = async (req, res, next) => {
    const { authorizarion } = req.headers;

    if (!authorizarion) return res.status(401).send('Usuario no autorizado');

    try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(
            authorizarion,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.id = payload.id
        next();
    } catch (error) {
        res.status(401).send('Usuario no autorizado');
    }
};

export default userJWTDTO;
