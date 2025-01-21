import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'
import { Cart } from './Cart';

export const Navbar = () => {
  const navItems = [
    { id:crypto.randomUUID(), path: '/', title: 'Home' },
    { id:crypto.randomUUID(), path: 'shop', title: 'Shop' }
  ];
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
       {navItems.map(menuItem => <li className={styles.item} key={menuItem.id}>
        <Link className={styles.link} to={menuItem.path}>{menuItem.title}</Link>
       </li>)}
       <Link title='Shopping Cart' className={styles.link}><li className={styles.item}><Cart/></li></Link>
      </ul>
    </nav>
  );
};
