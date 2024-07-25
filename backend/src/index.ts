import express, {Request, Response} from 'express';
import { sampleProducts } from './data';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
//import productRoutes from './routes/productRoutes';
import cors from 'cors'

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

mongoose.connect(process.env.MONGO_URI!, {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleProducts);
});
app.get('/api/products/:slug', (req: Request, res: Response) => {
  res.json(sampleProducts.find((x) => x.slug === req.params.slug))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
