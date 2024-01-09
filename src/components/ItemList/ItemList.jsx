import ItemCount from "../ItemCount/ItemCount";

const ItemList = ({ products }) => {
    const firstRow = products.slice(0, 8);
    const secondRow = products.slice(8);

    return (
        <div className="d-flex ms-4 flex-wrap card-prod">
            {firstRow.map((prod) => (
                <div key={prod.id} className="item-box text-center col-3">
                    <img src={prod.img} style={{ width: 150 }} alt={prod.name} />
                    <h3>{prod.name}</h3>
                    <p>{prod.description}</p>
                    <div className="row card-p">
                            <div className="col-6">
                                <p> ${parseFloat(prod.price)}</p>
                            </div>
                            <div className="col-6">
                                <p> Stock: {prod.stock} </p>
                            </div>
                        </div>
                        <ItemCount initial={1} stock={prod.stock} onAdd={(count) => console.log('Cantidad agregada', count) } />
                </div>
            ))}

            {secondRow.map((prod) => (
                <div key={prod.id} className="item-box text-center col-3 card-prod">
                    <div>
                        <img src={prod.img} style={{ width: 250 }} alt={prod.name} />
                        <h3>{prod.name}</h3>
                        <p>{prod.description}</p>
                        <p>hola</p>
                        <div className="row">
                            <div className="col-6">
                                <p> $ {prod.price}</p>
                            </div>
                            <div className="col-6">
                                <p> {prod.stock} </p>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ItemList;
