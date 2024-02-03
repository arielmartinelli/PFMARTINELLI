import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const CartView = () => {

    const { cart, total, removeItem, removeOneItem, agreOneItem } = useCart()
    const totalProducts = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    return (
        <div className="cart-view ms-4 row">

            <section className="detalle-prod col-7">
                <h1> Detalle carrito </h1>
                {
                    cart.map(prod => {
                        return (
                            <div className=" mt-4" key={prod.id}>

                                <div className="row borde py-3">
                                    <div className="col-10 ">
                                        <div className="row">
                                            <div className="col-3">
                                                <img src={prod.img} alt={prod.name} style={{ width: 80 }} />
                                            </div>
                                            <div className="col-9">
                                                <div className="row">
                                                    <div className="col-6 mt-2">
                                                        <h4 className="me-5">{prod.name}</h4>

                                                        <h4 className="me-5"> ${prod.price.toLocaleString()}</h4>
                                                    </div>
                                                    <div className="col-6 mt-2">
                                                        <h4 className="cantidad">Subtotal: ${prod.quantity * prod.price}</h4>
                                                        <div className=" cart">
                                                            <div className="row">
                                                                <div className="col-4 d-flex justify-content-end">
                                                                    <button onClick={() => removeOneItem(prod.id)} className=" agregar">
                                                                        -
                                                                    </button>
                                                                </div>

                                                                <div className="col-4 d-flex justify-content-center">
                                                                    <h4 className="mt-2"> {prod.quantity} </h4>
                                                                </div>

                                                                <div className="col-4 d-flex justify-content-start">
                                                                    <button onClick={() => agreOneItem(prod.id)} className="quitar"> + </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-2 align-self-center">

                                        <button onClick={() => removeItem(prod.id)} className="btn btn-danger quitar"> Quitar </button>

                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </section>
            <section className="detalle-price borde p-4 col-4 ms-5">
                <h1> Resumen de la compra </h1>
                <div className="row claro">
                    <div className="col-6">
                        <h4> Productos ({totalProducts})</h4>
                    </div>
                    <div className="col-6">
                        <h4> ${total} </h4>
                    </div>
                </div>
                <div className="row claro">
                    <div className="col-6">
                        <h4> IVA 21% </h4>
                    </div>
                    <div className="col-6">
                        <h4> ${total * 0.21} </h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h4>Total</h4>
                    </div>
                    <div className="col-6">
                        <h4>${total + total * 0.21} </h4>
                    </div>
                </div>
                <Link to='/checkout'>
                    <button className="btn btn-danger">
                        Coninuar
                    </button>
                </Link>
            </section>
        </div>
    )
}

export default CartView