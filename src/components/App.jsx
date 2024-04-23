import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import '../styles/index.css';

const MAX_CART_CAPACITY = 999;

function App() {
  const [cart, setCart] = useState([]);

  function updateItemInCart(itemId, quantity) {
    let index = cart.findIndex((element) => element.id === itemId);
    if (!index) {
      const actualQuantity = Math.min(quantity, MAX_CART_CAPACITY);
      const newItem = { id: itemId, quantity: actualQuantity };
      setCart([...cart, newItem]);
      return;
    }

    const cartItem = cart[index];
    const newQuantity = Math.min(
      cartItem.quantity + quantity,
      MAX_CART_CAPACITY
    );
    const newCart = [...cart];
    if (newQuantity <= 0) {
      newCart.splice(index, 1);
    } else {
      newCart[index] = { id: itemId, quantity: newQuantity };
    }
    setCart(newCart);
  }

  return (
    <>
      <NavBar cartAmount={cart.length} />
      <Outlet updateItemInCart={updateItemInCart} />
      <Footer />
    </>
  );
}

export default App;
