import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import FixedNav from './components/FixedNav/FixedNav'
import HomeContainer from './components/HomeContainer/HomeContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import ItemLiDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'



function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
        <FixedNav />
          <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos filtrados"} />} />
            <Route path='/detail/:productId' element={<ItemLiDetailContainer />} />
            {/* <Route path='/cart' element={<CartView />} />
            <Route path='/checkout' element={<Checkout />} /> */}
            <Route path='*' element={<h1>ERROR 404</h1>} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
