import {useState ,useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() =>{
            if(categoryId) document.title = "Atomic: " + categoryId
            return () => {
                document.title = "Atomic"
            }
        }, [categoryId])
 
        console.log(categoryId)

    useEffect(() => {
        setProducts([]) 
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
        .then(response => {
            console.log(response)
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading) {
        return <h1>Cargando los productos...</h1>
    }

    return (
        <div id="item-container" className="ms-0 item-container">
            <h1>{greeting + ": " + (categoryId ?? '')}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer