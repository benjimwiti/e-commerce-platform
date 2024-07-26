//import { Routes } from 'react-router-dom';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import express from 'express'
import { keyRouter } from './routes/keyRoutes'
import { productRouter } from './routes/productRoutes'
import { seedRouter } from './routes/seedRoutes'
import { userRouter } from './routes/userRoutes'
import { orderRouter } from './routes/orderRoutes'

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
app.use(express.urlencoded({ extended: true }))

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

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.use('/api/seed', seedRouter)
app.use('/api/keys', keyRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
