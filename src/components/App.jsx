import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import '../styles/index.css';
import { MAX_CART_CAPACITY } from '../util';

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) ?? []
  );

  function updateCartInStorage(arr) {
    const cartStr = JSON.stringify(arr);
    localStorage.setItem('cart', cartStr);
  }

  function updateItemInCart(itemId, quantity, add = false) {
    let index = cart.findIndex((element) => element.id === itemId);
    if (index === -1 && quantity > 0) {
      const actualQuantity = Math.min(quantity, MAX_CART_CAPACITY);
      const newItem = { id: itemId, quantity: actualQuantity };
      const newCart = [...cart, newItem];
      updateCartInStorage(newCart);
      setCart(newCart);
      return;
    }

    const cartItem = cart[index];
    let newQuantity = add ? cartItem.quantity + quantity : quantity;
    newQuantity = Math.min(newQuantity, MAX_CART_CAPACITY);
    const newCart = [...cart];

    if (newQuantity <= 0) {
      newCart.splice(index, 1);
    } else {
      newCart[index] = { id: itemId, quantity: newQuantity };
    }
    updateCartInStorage(newCart);
    setCart(newCart);
  }

  function removeItemFromCart(itemId) {
    updateItemInCart(itemId, 0);
  }

  return (
    <>
      <NavBar cartSize={cart.length} />
      <Outlet context={{ cart, updateItemInCart, removeItemFromCart }} />
      <Footer />
    </>
  );
}

export default App;
