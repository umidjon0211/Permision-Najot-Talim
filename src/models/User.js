import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    surname: String,
    lastname: String,
    email: { type: String, unique: true },
    password: String,
    img: String,
    birthDate: Date,
    role: { type: String, enum: ['user', 'admin', 'superAdmin'], default: 'user' }
});

export default mongoose.model('User', userSchema);
