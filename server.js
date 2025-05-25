import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import morgan from 'morgan';
import adminRoutes from './routes/adminRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // logs method, URL, status, response time etc.
}
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.get('/health', (req, res) => res.status(200).json({ status: 'OK',message:"Status Successful" }));

app.use(notFound);
// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
