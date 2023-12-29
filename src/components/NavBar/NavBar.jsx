import CartWidget from "../CartWidget/CartWidget"
import logo from "./img/logo.png"
import Button from "../Button/Button"

const NavBar = () => {
    return(
        <>
            <img src= {logo} style={{width:250}} />
            <div>
            <Button label = {"Inicio"} />
            <Button label = {"Suplementos"} />
            <Button label = {"Acesorios"} />
            <Button label = {"Indumentaria"} />
            </div>
        </>
    )
}

export default NavBar