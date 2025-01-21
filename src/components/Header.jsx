import { Link } from 'react-router-dom';
import brandLogo from '../assets/brand.svg';
import { Navbar } from './Navbar';
import styles from '../styles/Header.module.css'
export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img
          className ={styles.brandImage}
          src={brandLogo}
          alt='Trendy Threads Logo'
          title='Trendy Threads Logo'
        />
      </Link>
      <Navbar />
    </header>
  );
};
