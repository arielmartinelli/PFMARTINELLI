import React from "react";
import cart from "./assets/cart.svg";
import { FaCartShopping } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css"; 

const CartWidget = (props) => {
  return (
    <div className="d-flex align-items-center pt-1">
      <h1 id="cart-number">{props.label}</h1>
      <img src={cart} alt="Cart Shop"  style={{width:30}}/>
    </div>
  );
};

export default CartWidget;
