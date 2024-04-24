import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { USDollar } from '../util';
import QuantitySelector from './QuantitySelector';

function ProductPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { updateItemInCart } = useOutletContext();
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function getProductData() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (response.status >= 400) throw new Error('Server error');
        const json = await response.json();
        setProductData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getProductData();
  }, [productId]);

  function addToCart() {
    updateItemInCart(parseInt(productId), quantity, true);
    navigate('/cart');
  }

  return (
    <div className='product-page'>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {productData && (
        <div className='product-display'>
          <div className='product-img'>
            <img src={productData.image} alt='' />
          </div>
          <div className='product-info'>
            <h2>{productData.title}</h2>
            <h3>{USDollar.format(productData.price)}</h3>
            <QuantitySelector value={quantity} setValue={setQuantity} />
            <button className='btn' onClick={addToCart}>
              ADD TO CART
            </button>
            <p>{productData.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
