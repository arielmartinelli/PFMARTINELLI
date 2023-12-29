import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import NewTitle from './components/NewTitle/NewTitle'

function App() {
  return (
    <div>
      <NewTitle/>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemCount/>
    </div>
  );
}

export default App
