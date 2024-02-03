import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import Swal from 'sweetalert2'

const ItemDetail = ({ id, name, OldPrice, img, price, stock, description }) => {
    const { addItem, getProductQuantity } = useCart()
    const [productQuantity, setProductQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, img,stock, quantity
        }

        addItem(objProductToAdd)

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1700,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: `Se agregaron correctamente ${quantity} ${name}`
          });

        setProductQuantity(getProductQuantity(id))
    }

    return (
        <div>
            <div className="card-detail">
                <div className="row">
                    <div className="col-6">
                        <img src={img} alt={name} style={{ width: 330 }} />
                    </div>
                    <div className="col-6">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <div className="row mt-4">
                            <div className="col-6">
                                <h3 className='OldPrice mb-0'>${OldPrice.toLocaleString()}</h3>
                                <h2 className='price'>${price.toLocaleString()}</h2>
                            </div>
                            <div className="col-6 mt-2 d-flex align-items-center justify-content-center">
                                <footer>
                                    {
                                        productQuantity === 0 ? (
                                            <ItemCount onAdd={handleOnAdd} stock={stock} initial={1} />
                                        ) : (
                                            <button className='btn btn-danger'>
                                                <Link id='end' to='/cart'>Finalizar compra</Link>
                                            </button>
                                        )
                                    }
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail