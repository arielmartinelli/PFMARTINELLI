import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import CartWidget from "../CartWidget/CartWidget"

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const incrementar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrementar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="item-count mt-">
            <div id="inc-dec" className="d-flex justify-content-center">
                <button className="btn btn-danger me-1 mas-menos" onClick={incrementar} >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <h2 className="mx-3"> {count} </h2>
                <button className="btn btn-danger mx-1 mas-menos" onClick={decrementar} >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
            <div>
            <button className="btn btn-danger mx-1 my-3" onClick={() => onAdd(count)} disabled={!stock} >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount