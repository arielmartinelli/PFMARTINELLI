import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import FixedNav from './components/FixedNav/FixedNav'
import HomeContainer from './components/HomeContainer/HomeContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import ItemLiDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {

  return (
    <div>
      <BrowserRouter>
        <FixedNav />
        <Routes>
          <Route path='/' element={<HomeContainer />} />

          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos filtrados"} />} />

          <Route path='/detail/:productId' element={<ItemLiDetailContainer />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
