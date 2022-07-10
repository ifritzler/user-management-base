import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    _id: {
        type: String,
        _id: false,
    },
    name: {
        type: String,
        required: true,
        minLength: [4, 'name must have 2 characters minimum'],
        maxLength: [20, 'name must have 20 characters maximum'],
    },
    surname: {
        type: String,
        required: true,
        minLength: [4, 'surname must have 4 characters minimum'],
        maxLength: [50, 'surname must have 50 characters maximum'],
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
});

const userModel = model('User', userSchema)
export default userModel;
