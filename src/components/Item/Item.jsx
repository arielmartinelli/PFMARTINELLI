import { Link } from "react-router-dom"

const Item = ({ id, name, img, price, description, category, stock }) => {
    return (
        <div key={id} className="text-center item-box card card-p mb-4">
            <div className="box-img-item mt-2 d-flex align-items-center justify-content-center mx-auto">
                <img src={img} style={{ width: 180 }} alt={name} />
            </div>
            <h3 className="mt-3">{name}</h3>
            <p>{description}</p>
            <div className="row">
                <div className="col-6">
                    <p> $ {price} </p>
                </div>
                <div className="col-6">
                    <p> Stock: {stock} </p>
                </div>
            </div>
            <div>
                <Link to={`/detail/${id}`} className='btn btn-danger mb-4' > Detalle </Link>
            </div>
            {/* <ItemCount initial={1} stock={prod.stock} onAdd={(count) => console.log('Cantidad agregada', count)} /> */}
        </div>
    )
}

export default Item