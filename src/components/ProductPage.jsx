import { useParams } from 'react-router-dom';

function ProductPage() {
  const { productId } = useParams();

  return (
    <div className='product-page'>
      <h1>Product: {productId}</h1>
    </div>
  );
}

export default ProductPage;
