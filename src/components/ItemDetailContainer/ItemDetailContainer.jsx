import {useState ,useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import Item from "../Item/Item"

const ItemLiDetailContainer = () => {

    const [product, setProduct] = useState([])

    const { productId } = useParams()

    

    useEffect(() => {
        getProductById(productId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [productId])

    if (!product){
        return <h1> El producto no existe </h1>
    }

    return (
        <div id="item-detail" className="ms-0 item-detail">
            <h1> Detalle </h1>
            <ItemDetail product={productId}/>
        </div>
    )
}

export default ItemLiDetailContainer