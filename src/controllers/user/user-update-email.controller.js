import UserModel from '#Schemas/user.schema.js';
import { compare } from 'bcrypt';
const userUpdateEmailController = async (req, res) => {
    const { email, password } = req.body;
    const { id } = req;

    const user = await UserModel.findById(id).exec();
    if (!user) {
        return res.status(403).send('Usuario no autorizado');
    }

    const isOkPassword = await compare(password, user.password);
    if (!isOkPassword) return res.status(401).send('Credenciales incorrectas.');

    user.set({email})
    user.save()
    return res.send('Email actualizado satisfactoriamente')
};

export default userUpdateEmailController;
