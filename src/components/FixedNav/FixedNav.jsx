import React, { useEffect } from 'react';
import CartWidget from "../CartWidget/CartWidget"
import logo from "../NavBar/img/logo.png"
import Button from "../Button/Button"
import ButtonNavBar from "../ButtonNavBar/ButtonNavBar"
import ItemCount from "../ItemCount/ItemCount"
import Search from "../Search/Search"
import DiscountBar from "../DiscountBar/DiscountBar"
import MainMenu from "../MainMenu/MainMenu"

const FixedNav = () => {

  useEffect(() => {
    const handleScroll = () => {
      const NavBox = document.getElementById('BoxNav');
      const offset = 40;

      if (window.pageYOffset > offset) {
        NavBox.style.position = 'fixed';
        NavBox.style.top = '0';
      } else {
        NavBox.style.position = 'relative';
        NavBox.style.top = 'initial';
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className="p-4 nav-box d-flex" id='BoxNav'>
            <img src={logo} style={{ width: 300 }} />
            <div className="nav-content d-flex mt-4">
                <Search />
            </div>
            <MainMenu/>
        </div>
  );
};

export default FixedNav
