import CartItem from './CartItem';

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

export default CartItemList;
