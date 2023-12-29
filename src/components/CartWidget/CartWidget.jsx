import cart from "./assets/cart.svg"
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = (props) => {
    return(
        <div>
            <img src={cart} alt="Cart Shop" />
            <h1> {props.label} </h1>
        </div>
    )
}

export default CartWidget
