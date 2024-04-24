import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function NavBar({ cartSize }) {
  return (
    <div className='nav'>
      <div className='wrapper'>
        <div className='logo'>
          <Link to='/'>
            <img src='/logo.svg' alt='' />
          </Link>
        </div>
        <Link to='/cart' className='cart'>
          <FontAwesomeIcon icon={faCartShopping} />
          {cartSize > 0 && (
            <div className='cart-size'>
              <span>{cartSize}</span>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  cartSize: PropTypes.number,
};

export default NavBar;
