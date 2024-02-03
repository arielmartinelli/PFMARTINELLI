import {useState ,useEffect } from "react"
//import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebaseConfig"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() =>{
            if(categoryId) document.title = "Shark: " + categoryId
            return () => {
                document.title = "Shark"
            }
        }, [categoryId])
 

    useEffect(() => {
        
        setLoading(true)

        const productsCollection = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })

                setProducts(productsAdapted)
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Hubo un error",
                  });
            })
            .finally(() => {
                setLoading(false)
            })
        // setProducts([]) 
        // const asyncFunction = categoryId ? getProductsByCategory : getProducts



        // // asyncFunction(categoryId)
        // // .then(response => {
        // //     console.log(response)
        // //     setProducts(response)
        // // })
        // // .catch(error => {
        // //     console.error(error)
        // // })
        // // .finally(() => {
        // //     setLoading(false)
        // // })
    }, [categoryId])

    if(loading) {
        return <div className="margen">
            <h1>Cargando los productos...</h1>
        </div>
    }

    return (
        <div id="item-container" className="ms-0 item-container">
            <h1>{greeting + ": " + (categoryId ?? '')}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer