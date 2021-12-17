import React from 'react';
import { useParams } from 'react-router-dom';

const Cart = () => {
    const {productId} = useParams()
    return (
        <div>
            <h2>bay now {productId}</h2>
        </div>
    );
};

export default Cart;