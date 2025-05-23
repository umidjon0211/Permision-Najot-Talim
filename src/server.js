import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRouter from './routes/auth.routes.js';
import branchRouter from './routes/branch.routes.js';
import courseRouter from './routes/course.routes.js';
import studentRouter from './routes/student.routes.js';
import permissionRouter from './routes/permission.routes.js';

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use('/api/auth', authRouter);
app.use('/api/branches', branchRouter);
app.use('/api/courses', courseRouter);
app.use('/api/students', studentRouter);
app.use('/api/permissions', permissionRouter);

app.listen(process.env.PORT, () => console.log(`Server is run.. PORT-${process.env.PORT}`));
