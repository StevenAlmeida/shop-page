import App from './components/App';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import ShoppingCart from './components/ShoppingCart';
import ErrorPage from './components/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'product/:productId', element: <ProductPage /> },
      { path: 'cart', element: <ShoppingCart /> },
    ],
  },
];

export default routes;
