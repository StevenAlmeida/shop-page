import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className='error-page'>
      <h1>
        <Link to={'/'}>Go back home</Link>
      </h1>
    </div>
  );
}

export default ErrorPage;
