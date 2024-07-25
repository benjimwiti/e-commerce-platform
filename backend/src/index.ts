//import { Routes } from 'react-router-dom';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
//import productRoutes from './routes/productRoutes';
import cors from 'cors'
import express from 'express'
import { productRouter } from './routes/productRoutes'
import { seedRouter } from './routes/seedRoutes'

dotenv.config();

const app = express();
const PORT = 5000;
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)

app.use(express.json());

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb+srv://purity:purity123@cluster0.3qeqe6r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.set('strictQuery', true)
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(() => {
    console.log('error mongodb')
  })

app.use('/api/users', userRoutes);
app.use('/api/products', productRouter)
app.use('/api/seed', seedRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
