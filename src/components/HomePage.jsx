import { useState } from 'react';
import { useEffect } from 'react';
import ProductButton from './ProductButton';

function HomePage() {
  const [productList, setProductList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProductData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (response.status >= 400) throw new Error('Server error');
        const json = await response.json();
        setProductList(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getProductData();
  }, []);

  console.log(productList);

  return (
    <div className='home-page'>
      <div className='hero'>
        <img src='pexels-rfera-432059.jpg' alt='' />
        <div className='hero-text'>
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            doloribus delectus error eveniet in amet, incidunt maxime, sequi at
            omnis facere laboriosam obcaecati excepturi perferendis quia qui
            doloremque ea? Id!
          </p>
        </div>
      </div>

      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {productList && (
        <div className='products'>
          <h1>PRODUCTS</h1>
          <div className='product-grid'>
            {productList.map((item) => {
              return <ProductButton key={item.id} product={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
