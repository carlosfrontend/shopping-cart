import { Link } from 'react-router-dom';
import brandLogo from '../../assets/brand.svg';
import { Navbar } from '../Navbar/Navbar';
import styles from './Header.module.css';
import PropTypes from 'prop-types';

export const Header = ({ cartContext }) => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img
          className={styles.brandImage}
          src={brandLogo}
          alt='Trendy Threads Logo'
          title='Trendy Threads Logo'
        />
      </Link>
      <Navbar cartContext={cartContext} />
    </header>
  );
};

Header.propTypes = {
  cartContext: PropTypes.shape({
    cartItemsNumber: PropTypes.number,
    setCartItemsNumber: PropTypes.func
  })
};
