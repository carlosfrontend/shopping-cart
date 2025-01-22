import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import styles from '../styles/PageContainer.module.css';
import { Footer } from './Footer';
import { useState } from 'react';

export const PageContainer = () => {
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const cartContext = {
    cartItemsNumber: cartItemsNumber,
    setCartItemsNumber: setCartItemsNumber
  };

  return (
    <>
      <Header cartContext={cartContext} />
      <main className={styles.mainContainer}>
        <Outlet context={cartContext} />
      </main>
      <Footer />
    </>
  );
};
