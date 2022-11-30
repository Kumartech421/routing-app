import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigation = useNavigate();
    return ( 
        <>
            <h1>This Is product Page</h1>
            <button onClick={() => navigation('/order')}>Submit Order</button>
        </>
     );
}
 
export default Products;