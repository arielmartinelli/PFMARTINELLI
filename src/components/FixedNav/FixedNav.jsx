import React, { useEffect } from 'react';
import logo from "../NavBar/img/logo.png"
import Search from "../Search/Search"
import MainMenu from "../MainMenu/MainMenu"
import NewTitle from '../NewTitle/NewTitle';
import DiscountBar from '../DiscountBar/DiscountBar';

const FixedNav = () => {
    
  return (
    <div>
        <DiscountBar label={'20% off con cupon RYNO2024 | Envío GRATIS en compras superiores a $ 25.000'} />
      <div className="p-3 nav-box d-flex" id='BoxNav'>
        <img src={logo} style={{ width: 300 }} />
        <div className="nav-content d-flex mt-4">
          <Search />
        </div>
        <MainMenu/>
        <NewTitle title={"Atomic Home"} />
      </div>
    </div>
  )
}

export default FixedNav
