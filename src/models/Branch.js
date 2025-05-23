import mongoose from 'mongoose';

const branchSchema = new mongoose.Schema({
    name: String,
    address: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Branch', branchSchema);
