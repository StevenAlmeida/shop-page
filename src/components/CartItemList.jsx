import CartItem from './CartItem';
import PropTypes from 'prop-types';

function CartItemList({
  cart,
  productData,
  updateItemInCart,
  removeItemFromCart,
}) {
  return (
    <div className='cart-items'>
      {cart.map((item) => {
        const data = productData.find((element) => element.id === item.id);
        return (
          <CartItem
            key={data.id}
            product={data}
            quantity={item.quantity}
            updateItemInCart={updateItemInCart}
            removeItemFromCart={removeItemFromCart}
          />
        );
      })}
    </div>
  );
}

CartItemList.propTypes = {
  cart: PropTypes.array,
  productData: PropTypes.array,
  updateItemInCart: PropTypes.func,
  removeItemFromCart: PropTypes.func,
};

export default CartItemList;
