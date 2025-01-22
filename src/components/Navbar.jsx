import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import PropTypes from 'prop-types';
import { CartLogo } from '../icons/CartLogo';

export const Navbar = ({ cartContext }) => {

  const navItems = [
    { id: crypto.randomUUID(), path: '/', title: 'Home' },
    { id: crypto.randomUUID(), path: 'shop', title: 'Shop' },
    { id: crypto.randomUUID(), path: 'cart', title: 'Shoping Cart' }
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        {navItems.slice(0,2).map((menuItem) => (
          <li className={styles.item} key={menuItem.id}>
            <Link className={styles.link} to={menuItem.path}>
              {menuItem.title}
            </Link>
          </li>
        ))}
        <li key={navItems[2].key} className={styles.item}>
          <Link to={navItems[2].path} title={navItems[2].title} className={styles.link}>
            <CartLogo />
            {cartContext.cartItemsNumber}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  cartContext: PropTypes.shape({
    cartItemsNumber: PropTypes.number,
    setCartItemsNumber: PropTypes.func
  })
};
