import React, { useEffect } from 'react';
import logo from "../NavBar/img/logo.png"
import Search from "../Search/Search"
import MainMenu from "../MainMenu/MainMenu"
import NewTitle from '../NewTitle/NewTitle';
import DiscountBar from '../DiscountBar/DiscountBar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { useCart } from '../../context/CartContext';

const FixedNav = () => {
  const { totalQuantity } = useCart();

  return (
    <div>
      <DiscountBar label={'20% off con cupon RYNO2024 | Envío GRATIS en compras superiores a $ 25.000'} />
      <div className="p-3 nav-box d-flex" id='BoxNav'>
        <Link to={"/"}> <img src={logo} className='ms-4' /> </Link>

        <div className="nav-content d-flex mt-4">
          <Search />
        </div>
        <div id="cart-fixed">
          <CartWidget label={totalQuantity} />
        </div>
        <MainMenu />
        <NewTitle title={"Shark Home"} />
      </div>
    </div>
  )
}

export default FixedNav
