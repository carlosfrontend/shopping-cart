import { useProducts } from '../../hooks/useProducts';
import styles from './ShoppingPage.module.css';
import { Loader } from '../Loader/Loader';
import { ProductCard } from '../ProductCard/ProductCard';
import { useOutletContext } from 'react-router-dom';
import { NetworkError } from '../NetworkError/NetworkError';

export const ShoppingPage = () => {
  const cartContext = useOutletContext();
  const { cartItemsNumber, setCartItemsNumber, store, setStore } = cartContext;
  const { products, loading, error } = useProducts();

  if (loading) return <Loader />;
  if (error) return <NetworkError error={error}/>;

  return (
    <section className={styles.shoppingSection}>
      <h1 className={styles.title}>Shopping page</h1>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cartItemsNumber={cartItemsNumber}
          setItemsNumber={setCartItemsNumber}
          store={store}
          setStore={setStore}
        />
      ))}
    </section>
  );
};
