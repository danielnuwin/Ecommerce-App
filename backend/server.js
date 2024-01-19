import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
const port = process.env.PORT || 4000; //Since FE running on port 3000, 5000 is taken on MAC Airplay

connectDB(); //Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

//Product Route
app.use('/api/products', productRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));