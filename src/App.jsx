import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import NewTitle from './components/NewTitle/NewTitle'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
      <NewTitle />
      <NavBar/>
      <ItemCount/>
      <ItemListContainer greeting={"Productos"} />
    </div>
  );
}

export default App
