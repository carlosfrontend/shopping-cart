import { useProducts } from '../hooks/useProducts';
import styles from '../styles/ShoppingPage.module.css';
import { Loader } from './Loader';
import { ProductCard } from './ProductCard';
import { useOutletContext } from 'react-router-dom';

export const ShoppingPage = () => {
  const cartContext = useOutletContext();
  const { cartItemsNumber, setCartItemsNumber, store, setStore } = cartContext;
  const { products, loading, error } = useProducts();

  if (loading) return <Loader />;
  if (error) return <p>A network error was encountered {error.message}</p>;

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
