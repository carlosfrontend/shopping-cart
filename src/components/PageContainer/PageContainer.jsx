import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import styles from './PageContainer.module.css';
import { Footer } from '../Footer/Footer';
import { useState } from 'react';

export const PageContainer = () => {
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [store, setStore] = useState([]);
  const cartContext = {
    cartItemsNumber: cartItemsNumber,
    setCartItemsNumber: setCartItemsNumber,
    store: store,
    setStore: setStore
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
