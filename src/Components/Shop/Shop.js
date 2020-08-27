import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Shop.css";

const Shop = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div id="shop">
            <div className="shop-course">
                <h1 className="display-5">Explore our schools to find your perfect program</h1>
                <p>Choose from 150,000 online video courses with new additions published every month</p>
            </div>
            <div className="shop-cart">
                <button className="cart btn btn-warning">{cartIcon}: {props.cart.length}</button>
            </div>
        </div>
    );
};

export default Shop;