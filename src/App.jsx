import { useState } from 'react'
import './App.css'
import NewTitle from './components/NewTitle/NewTitle'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import DiscountBar from './components/DiscountBar/DiscountBar'
import FixedNav from './components/FixedNav/FixedNav'
import ItemDetailConteiner from './components/ItemListContainer/ItemDetailConteiner/ItemDetailContainer'

function App() {
  return (
    <div>
      <NewTitle />
      <DiscountBar label={'20% off con cupon RYNO2024 | Envío GRATIS en compras superiores a $ 25.000'} />
      <FixedNav/>
     <ItemListContainer greeting={"Suplementos"} />
     <ItemDetailConteiner/>
    </div>
  );
}

export default App
