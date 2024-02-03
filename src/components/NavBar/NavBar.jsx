import logo from "./img/logo.png"
import Search from "../Search/Search"
import MainMenu from "../MainMenu/MainMenu"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <div className="p-4 nav-box d-flex">
            <Link to={'/'}> <img className="logo" src={logo} /> </Link>
            <div className="nav-content d-flex mt-2">
                <Search />
            </div>
            <div className="nav-content mt-2">
                <CartWidget label={0} />
            </div>

            <MainMenu />
        </div>
    )
}

export default NavBar