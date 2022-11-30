import React from 'react';
import {useNavigate} from 'react-router-dom';

function Order() {
        const navigation = useNavigate();
        return ( 
            <>
                <h2>Order Sucessful!</h2>
                <button onClick={() => navigation('/products')}>Go Back</button>
            </>
        );
    }
 
export default Order; 