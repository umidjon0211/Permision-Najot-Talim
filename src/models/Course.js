import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    name: String,
    branch: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' }
});

export default mongoose.model('Course', courseSchema);
