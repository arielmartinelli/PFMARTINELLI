import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock)
        setCount(prev => prev + 1)
    }

    return (
        <div className="item-count ">
            <div id="inc-dec" className="d-flex ms-1">
                <button className="btn btn-danger mx-1 mas-menos" onClick={decrement} >
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <h2 className="mx-3"> {count} </h2>
                <button className="btn btn-danger me-1 mas-menos" onClick={increment} >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <div>
            <button className="btn btn-danger mx-1 my-2 " id='agregar-carrito' onClick={() => onAdd(count)} disabled={!stock} >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount


// import { useState } from "react"
 
 import CartWidget from "../CartWidget/CartWidget"

// const ItemCount = ({stock, initial, onAdd}) => {
//     const [count, setCount] = useState(initial)

//     const incrementar = () => {
//         if (count < stock) {
//             setCount(count + 1)
//         }
//     }

//     const decrementar = () => {
//         if (count > 1) {
//             setCount(count - 1)
//         }
//     }

     
// }

// export default ItemCount