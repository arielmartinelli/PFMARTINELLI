import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div className="d-flex ms-4 flex-wrap card-prod">
            {
                products.map(prod => {
                    return(
                        <Item key={prod.id} name={prod.name} img={prod.img} price={prod.price} description={prod.description} category={prod.category} stock={prod.stock} /> 
                        
                    )
                })
            }
        </div>
    );
};

export default ItemList;
