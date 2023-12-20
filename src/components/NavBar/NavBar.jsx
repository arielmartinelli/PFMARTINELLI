import CartWidget from "../CartWidget/CartWidget"
import ryno from "./img/ryno.png"

const NavBar = () => {
    return(
        <nav>
            <img src= {ryno} style={{width:200}} />
            <div>
                <ul>
                    <li> <button> Suplementos </button> </li>
                    <li> <button> Anabolicos </button> </li>
                    <li> <button> Accesorios </button> </li>
                    <li> <button> Indumentaria </button> </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar