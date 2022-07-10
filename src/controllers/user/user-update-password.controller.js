import UserModel from '#Schemas/user.schema.js';
import { compare, hash } from 'bcrypt';
const userUpdatePasswordController = async (req, res) => {
    const { oldPassword, password } = req.body;
    const { id } = req;

    const user = await UserModel.findById(id).exec();
    if (!user) {
        return res.status(403).send('Usuario no autorizado');
    }

    const isOkPassword = await compare(oldPassword, user.password);
    if (!isOkPassword) return res.status(401).send('Credenciales incorrectas.');

    const hashedPassword = await hash(password, 12);

    user.set({password: hashedPassword})
    user.save()
    return res.send('Password actualizado satisfactoriamente')
};

export default userUpdatePasswordController;
