import UserModel from '#Schemas/user.schema.js';
import { compare } from 'bcrypt';
import { SignJWT } from 'jose';
const userLoginController = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email }).exec();
    if (!user) {
        return res
            .status(401)
            .send('Credenciales incorrectas.');
    }

    const isOkPassword = await compare(password, user.password);
    console.log(isOkPassword)
    if(!isOkPassword) return res.status(401).send('Credenciales incorrectas.')

    const encoder = new TextEncoder()
    const jwt = await new SignJWT({_id: user._id})
        .setExpirationTime('1h')
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY))

    return res.send({
        'token': jwt
    });
};

export default userLoginController;
