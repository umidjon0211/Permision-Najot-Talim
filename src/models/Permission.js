import mongoose from 'mongoose';

const permissionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    branchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch' },
    permissionModel: { type: String, enum: ['course'] },
    read: { type: Boolean, default: false },
    write: { type: Boolean, default: false },
    update: { type: Boolean, default: false },
    delete: { type: Boolean, default: false }
});

export default mongoose.model('Permission', permissionSchema);
