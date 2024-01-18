import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product';
//import products from '../products.js'
import axios from 'axios';

const HomeScreen = () => {
    //State is products, and updating products is setProducts
    const [products, setProducts] = useState([]);

    useEffect( () => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products');
            setProducts(data);
        };
        fetchProducts();
    }, []);//[] array dependency, if you put something here and value changes 

    return (
        // Display All Products with Link to Each Product and passed props to product component to display Product Cards
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
