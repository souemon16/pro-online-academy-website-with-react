import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Shop.css";

const Shop = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    const cart = props.cart;
    const total = cart.reduce((total, course) => total + course.price, 0);

    // Format Number 
    function formatNumber(num) {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div id="shop">
            <div className="shop-course">
                <h1 className="display-5">Explore our schools to find your perfect program</h1>
                <p>Choose from 150,000 online video courses with new additions published every month</p>
            </div>
            <div className="shop-cart">
                <div>
                    <p>Total Items{cartIcon}: {props.cart.length}</p>
                    <p>Total Price: {total}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;