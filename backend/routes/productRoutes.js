import express from "express";
const router = express.Router();
import products from '../data/products.js'

router.get('/', async (req, res) => {
    res.json(products); //Send JSON response with products 
});

router.get('/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})

export default router;