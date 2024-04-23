import { useNavigate } from 'react-router-dom';
import { USDollar } from '../util';

function ProductButton({ product }) {
  const navigate = useNavigate();

  return (
    <div className='product-button'>
      <button onClick={() => navigate(`/product/${product.id}`)}></button>
      <div className='wrapper'>
        <div className='img-wrapper'>
          <img src={product.image} alt='' />
        </div>
        <h2>{USDollar.format(product.price)}</h2>
        <p>{product.title}</p>
      </div>
    </div>
  );
}

export default ProductButton;
