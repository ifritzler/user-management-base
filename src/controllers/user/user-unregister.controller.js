import UserModel from '#Schemas/user.schema.js';
import { compare } from 'bcrypt';
const userUnRegisterController = async (req, res) => {
    const { password } = req.body;
    const { id } = req;

    const user = await UserModel.findById(id).exec();
    if (!user) {
        return res.status(403).send('Usuario no autorizado');
    }

    const isOkPassword = await compare(password, user.password);
    if (!isOkPassword) return res.status(401).send('Credenciales incorrectas.');

    await UserModel.findOneAndDelete({_id: id})
    
    return res.send('Usuario Eliminado')
};

export default userUnRegisterController;
