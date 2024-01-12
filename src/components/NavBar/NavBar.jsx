import logo from "./img/logo.png"
import Search from "../Search/Search"
import MainMenu from "../MainMenu/MainMenu"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="p-4 nav-box d-flex">
            <Link to={'/'}> <img className="logo" src={logo}  /> </Link>
            <div className="nav-content d-flex mt-2">
                <Search />
            </div>
            <MainMenu/>
        </div>
    )
}

export default NavBar