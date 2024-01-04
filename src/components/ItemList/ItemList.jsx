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
                    <p className="precio">{prod.price}</p>
                </div>
            ))}

            {secondRow.map((prod) => (
                <div key={prod.id} className="item-box text-center col-3 card-prod">
                    <div>
                        <img src={prod.img} style={{ width: 150 }} alt={prod.name} />
                        <h3>{prod.name}</h3>
                        <p>{prod.description}</p>
                        <p className="precio">{prod.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
