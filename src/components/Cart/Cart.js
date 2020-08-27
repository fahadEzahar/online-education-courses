import React from 'react';

const Cart = (props) => {
    const {name,price} = props.cartItem;
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item d-flex my-2 justify-content-between">
                <span>{name}</span> <span> ${price}</span>
                </li>
            </ul>
        </div>
    );
};

export default Cart;