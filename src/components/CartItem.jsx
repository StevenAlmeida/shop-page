import { USDollar } from '../util';
import QuantitySelector from './QuantitySelector';
import { Link } from 'react-router-dom';

function CartItem({ product, quantity, updateItemInCart, removeItemFromCart }) {
  function setQuantityInCart(value) {
    updateItemInCart(product.id, value);
  }

  return (
    <div className='cart-item'>
      <div className='img-wrapper'>
        <img src={product.image} alt='' />
      </div>
      <div className='info'>
        <h2>
          <Link className='link' to={`/product/${product.id}`}>
            {product.title}
          </Link>
        </h2>
        <h3>{USDollar.format(product.price * quantity)}</h3>
      </div>
      <div className='quantity'>
        <QuantitySelector value={quantity} setValue={setQuantityInCart} />
        <button
          className='remove'
          onClick={() => removeItemFromCart(product.id)}
        >
          REMOVE
        </button>
      </div>
    </div>
  );
}

export default CartItem;
