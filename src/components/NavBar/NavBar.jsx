import CartWidget from "../CartWidget/CartWidget"
import logo from "./img/logo.png"
import Button from "../Button/Button"
import ButtonNavBar from "../ButtonNavBar/ButtonNavBar"
import ItemCount from "../ItemCount/ItemCount"
import Search from "../Search/Search"
import DiscountBar from "../DiscountBar/DiscountBar"
import MainMenu from "../MainMenu/MainMenu"

const NavBar = () => {
    return (
        <div className="p-4 nav-box d-flex">
            <img src={logo} style={{ width: 300 }} />
            <div className="nav-content d-flex mt-4">
                <Search />
            </div>
            <MainMenu/>
        </div>
    )
}

export default NavBar