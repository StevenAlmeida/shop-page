import CostDisplay from './CostDisplay';
import PropTypes from 'prop-types';

function CartTotal({ cart, productData }) {
  const shipping = 8.5;
  const salesTaxMult = 0.0625;
  const itemTotal = cart.reduce((currentTotal, item) => {
    const data = productData.find((element) => element.id === item.id);
    return currentTotal + item.quantity * data.price;
  }, 0);
  const salesTax = itemTotal * salesTaxMult;
  const total = itemTotal + shipping + salesTax;

  return (
    <div className='cart-total'>
      <div className='total'>
        <CostDisplay title='Item Total' cost={itemTotal} />
      </div>
      <div className='total'>
        <CostDisplay title='Shipping' cost={shipping} />
        <CostDisplay title='Sales Tax' cost={salesTax} />
      </div>
      <div className='total'>
        <CostDisplay title='Total' cost={total} />
      </div>
      <button className='btn'>CHECKOUT</button>
    </div>
  );
}

CartTotal.propTypes = {
  cart: PropTypes.array,
  productData: PropTypes.array,
};

export default CartTotal;
