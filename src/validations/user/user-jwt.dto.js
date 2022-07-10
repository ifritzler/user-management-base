import { jwtVerify } from 'jose';

const userJWTDTO = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send('Usuario no autorizado');
    try {
        const encoder = new TextEncoder();
        const { payload } = await jwtVerify(
            // Just token, not 'Bearer '
            authorization.split(' ')[1],
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.id = payload._id
        next();
    } catch (error) {
        res.status(401).send('Usuario no autorizado');
    }
};

export default userJWTDTO;
