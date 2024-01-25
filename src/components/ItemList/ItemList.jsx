import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div className="d-flex ms-4 flex-wrap card-prod">
            {
                products.map(product => {
                    return (
                        <Item key={product.id} {...product}/>
                    )
                })
            }
        </div>
    );
};

export default ItemList;
