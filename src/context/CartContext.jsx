import { useState, createContext, useContext } from "react"

const CartContext = createContext({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    totalQuantity: 0,
    total: 0,
    clearCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart(prev => [...prev, productToAdd])
      } else {
        const cartUpdated = cart.map(prod => {
          if(prod.id === productToAdd.id) {
            return {
              ...prod,
              quantity: productToAdd.quantity
            }
          } else {
            return prod
          }
        })

        setCart(cartUpdated)
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }
  
    const removeItem = (id) => {
      const cartUpdated = cart.filter(prod => prod.id !== id)
      setCart(cartUpdated)
    }

    

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
      let accu = 0

      cart.forEach(prod => {
          accu += prod.quantity * prod.price
      })

      return accu
    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (productId) => {
      const product = cart.find(prod => prod.id === productId)
      return product?.quantity
    }

    const removeOneItem = (productId) => {
      const cartUpdated = cart.map(prod => {
          if (prod.id === productId) {
              return {
                  ...prod,
                  quantity: Math.max(prod.quantity - 1, 1)  
              };
          } else {
              return prod;
          }
      });

      setCart(cartUpdated);
  };

  const agreOneItem = (productId) => {
      const cartUpdated = cart.map(prod => {
          if (prod.id === productId) {
              const newQuantity = prod.quantity + 1;
              return {
                  ...prod,
                  quantity: Math.min(newQuantity, prod.stock)  
              };
          } else {
              return prod;
          }
      });

      setCart(cartUpdated);
  };

  return (
      <CartContext.Provider value={{ cart, addItem, removeItem, removeOneItem, agreOneItem, totalQuantity, total, clearCart, getProductQuantity }}>
          { children }
      </CartContext.Provider>
  );
}

export const useCart = () => {
    return useContext(CartContext)
}