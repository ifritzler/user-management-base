import UserModel from '#Schemas/user.schema.js';

const userUpdateDataController = async (req, res) => {
    const { id } = req;
    const { name, surname } = req.body;

    const user = await UserModel.findById(id).exec();
    if (!user) {
        return res
            .status(403)
            .send('Usuario no autorizado');
    }

    user.set({name, surname})
    user.save()
    return res.send('Usuario actualizado con exito')
};

export default userUpdateDataController;
