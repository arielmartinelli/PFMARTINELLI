import CartWidget from "../CartWidget/CartWidget"
import logo from "./img/logo.png"
import Button from "../Button/Button"
import ButtonNavBar from "../ButtonNavBar/ButtonNavBar"
import ItemCount from "../ItemCount/ItemCount"

const NavBar = () => {
    return (
        <div className="py-3 nav-box">
            <img src={logo} style={{ width: 130 }} />
            <div>
                <ul className="nav-list ps-0">
                    <li><ButtonNavBar label={"Inicio"} className="d-block" /></li>
                    <li><ButtonNavBar label={"Suplementos"} className="d-block" /></li>
                    <li><ButtonNavBar label={"Acesorios"} className="d-block" /></li>
                    <li><ButtonNavBar label={"Indumentaria"} className="d-block" /></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar