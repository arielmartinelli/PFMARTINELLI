import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; 
const MainMenu = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const { totalQuantity } = useCart(); 

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    return (
        <nav className="navbar bg-body-tertiary icon-nav">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                    onClick={toggleOffcanvas}
                >
                    <FontAwesomeIcon icon={faBars} id='menu' />
                </button>
                <div className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title atomic-main-menu" id="offcanvasNavbarLabel">Shark Shop</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    
                    <div className="offcanvas-body li-main-menu">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className='link' to={"/"}> Inicio </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='link' to={"/category"}> Productos </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filtrar productos
                                </a>
                                <ul className="dropdown-menu li-main-menu">
                                    <li className='pt-2'>
                                        <Link className='link' to={"/category/suplementos"} > Suplementos </Link>
                                    </li>
                                    <li>
                                        <Link className='link' to={"/category/accesorios"} > Accesorios  </Link>
                                    </li>
                                    <li className='pb-2'>
                                        <Link className='link' to={"/category/indumentaria"} > Indumentaria </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainMenu;
