import { MAX_CART_CAPACITY } from '../util';
import PropTypes from 'prop-types';

function QuantitySelector({ value, setValue }) {
  function update(quantity) {
    const newQuantity = Math.min(Math.max(quantity, 1), MAX_CART_CAPACITY);
    setValue(newQuantity);
  }

  function increment() {
    const newQuantity = value + 1;
    update(newQuantity);
  }

  function decrement() {
    const newQuantity = value - 1;
    update(newQuantity);
  }

  return (
    <div className='quantity-selector'>
      <button onClick={decrement}>-</button>
      <input
        type='number'
        value={value}
        onChange={(e) => update(e.target.value)}
      />
      <button onClick={increment}>+</button>
    </div>
  );
}

QuantitySelector.propTypes = {
  value: PropTypes.number,
  setValue: PropTypes.func,
};

export default QuantitySelector;
