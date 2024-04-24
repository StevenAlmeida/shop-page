import { useEffect, useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import CartItemList from './CartItemList';
import CartTotal from './CartTotal';

function ShoppingCart() {
  const { cart, updateItemInCart, removeItemFromCart } = useOutletContext();
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    async function getProductData() {
      let err = null;
      const products = [];

      for (const item of cart) {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/${item.id}`
          );
          if (response.status >= 400) throw new Error('Server error');
          const json = await response.json();
          products.push(json);
        } catch (e) {
          err = e;
          break;
        }
      }

      if (err) {
        setError(err);
        return;
      }
      setProductData(products);
    }

    getProductData();
  }, [cart]);

  if (cart.length > 0) {
    return (
      <div className='shopping-cart'>
        {error && <h1>{error.message}</h1>}
        {productData && (
          <div className='wrapper'>
            <CartItemList
              cart={cart}
              productData={productData}
              updateItemInCart={updateItemInCart}
              removeItemFromCart={removeItemFromCart}
            />
            <CartTotal cart={cart} productData={productData} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='shopping-cart'>
      <div className='empty'>
        <h2>YOUR CART IS EMPTY</h2>
        <Link className='link' to='/'>
          Click here to start shopping
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCart;
