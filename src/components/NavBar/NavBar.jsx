import CartWidget from "../CartWidget/CartWidget"
import ryno from "./img/ryno.png"
import Button from "../Button/Button"

const NavBar = () => {
    return(
        <>
            <img src= {ryno} style={{width:200}} />
            <Button label = {"Inicio"} />
            <Button label = {"Suplementos"} />
            <Button label = {"Acesorios"} />
            <Button label = {"Indumentaria"} />
            <CartWidget/>
        </>
    )
}

export default NavBar