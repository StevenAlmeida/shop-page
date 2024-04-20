import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import ShoppingCart from './components/ShoppingCart';
import ErrorPage from './components/ErrorPage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'product/:productId',
    element: <ProductPage />,
  },
  {
    path: 'cart',
    element: <ShoppingCart />,
  },
];

export default routes;
