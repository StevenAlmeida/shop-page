import { Link } from 'react-router-dom';

function NavBar({ cartAmount }) {
  return (
    <div className='nav'>
      <div className='wrapper'>
        <div className='logo'>
          <Link to='/'>
            <img src='/logo.svg' alt='' />
          </Link>
        </div>
        <div className='cart'>
          <Link to='/cart' style={{ textDecoration: 'none' }}>
            <span>{cartAmount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
