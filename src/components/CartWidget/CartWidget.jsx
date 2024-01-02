import React from "react";
import cart from "./assets/cart.svg";
import { FaCartShopping } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css"; 

const CartWidget = (props) => {
  return (
    <div className="d-flex align-items-center">
      <img src={cart} alt="Cart Shop"  style={{width:40}}/>
      <h1>{props.label}</h1>
    </div>
  );
};

export default CartWidget;
