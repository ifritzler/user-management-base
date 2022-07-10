import UserModel from '#Schemas/user.schema.js';

const userProfileController = async (req, res) => {
    const { id } = req;

    const user = await UserModel.findById(id).exec();
    if (!user) {
        return res.status(403).send('Usuario no autorizado');
    }
    console.log(user);
    const { _id, name, surname, email } = user;
    res.send({
        _id,
        name,
        surname,
        email,
    });
};

export default userProfileController;
