import { useState } from "react"
import CartWidget from "../CartWidget/CartWidget"

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const incrementar = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    const decrementar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className="item-count">
            <div id="inc-dec">
                <button className="btn btn-danger mx-1" onClick={incrementar} >Incrmentar</button>
                <button className="btn btn-danger mx-1" onClick={decrementar} >Decremetar</button>
            </div>
            <div id="cart">
                <CartWidget label={count} />
            </div>
        </div>
    )
}

export default ItemCount