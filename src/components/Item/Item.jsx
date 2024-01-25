import { Link } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    return (
        <div key={id} className="text-center item-box  card-p mb-4">
            <div className="box-img-item mt-2 d-flex align-items-center justify-content-center mx-auto">
                <img src={img} style={{ width: 180 }} alt={name} />
            </div>
            <h3 className="mt-3">{name}</h3> 
            <p> $ {price.toLocaleString()} </p>
            <div>
                <Link to={`/detail/${id}`} className='btn btn-danger mb-4' > Detalle </Link>
            </div>
            {/* <ItemCount initial={1} stock={prod.stock} onAdd={(count) => console.log('Cantidad agregada', count)} /> */}
        </div>
    )
}

export default Item