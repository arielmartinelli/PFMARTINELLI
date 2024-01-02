const ItemList = ({products}) => {
    return(
        <div className="d-flex mt-5">
            {
                products.map(prod =>{
                    return(
                        <div className="me-4" key={prod.id}>
                            <img src={prod.img} style={{width:150}}/>
                            <h1>{prod.name} </h1>
                            <p>{prod.description} </p>
                            <p>{prod.price} </p>
                        </div>
                    )
                })
            }
            </div>
    )
}


export default ItemList