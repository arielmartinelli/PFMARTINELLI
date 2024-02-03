import React from "react";
import cart from "./assets/cart.svg";
import { FaCartShopping } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Link } from "react-router-dom";

const CartWidget = (props) => {
  return (
    <div className="d-flex pt-1 cart-wid">
      <Link to='/cart'><img src={cart} alt="Cart Shop" id="cart-img"  style={{width:30}}/></Link>
      
      <h3 id="cart-number">{props.label}</h3>
    </div>
  );
};

export default CartWidget;
