import mongoose from 'mongoose';

const connectDB = (uri) =>
    mongoose.connect(uri).then(() => {
        console.log('Database Connected');
    });

export default connectDB;
