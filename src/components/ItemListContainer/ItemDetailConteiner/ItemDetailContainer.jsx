import { useEffect } from "react"
import ItemDetail from "../../ItemDetail/ItemDetail"
import { getProductById } from "../../../asyncMock"
import { useState } from "react"

const ItemDetailConteiner = () => {

    const [produc, setProduct] = useState(null)


    useEffect(() => {
        getProductById("1")
            .them(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <ItemDetail {...produc} />
        </div>
    )

}

export default ItemDetailConteiner