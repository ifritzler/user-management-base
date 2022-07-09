import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
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
    },
    password: {
        type: String,
        required: true,
    },
});

const userModel = model('User', userSchema)
export default userModel;