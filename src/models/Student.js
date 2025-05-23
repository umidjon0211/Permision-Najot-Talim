import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    username: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

export default mongoose.model('Student', studentSchema);