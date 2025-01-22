import { useProducts } from '../hooks/useProducts';
import styles from '../styles/ShoppingPage.module.css';
import { ProductCard } from './ProductCard';
import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';

export const ShoppingPage = () => {
  const cartContext = useOutletContext();
  const { cartItemsNumber, setCartItemsNumber } = cartContext;
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
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
        />
      ))}
    </section>
  );
};

ShoppingPage.propTypes = {
  cartItemsNumber: PropTypes.number,
  setItemsNumber: PropTypes.func
};
