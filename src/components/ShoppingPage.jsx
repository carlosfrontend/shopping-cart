import styles from '../styles/ShoppingPage.module.css';
import { ProductCard } from './ProductCard';

export const ShoppingPage = () => {
  return (
    <section className={styles.shoppingSection}>
      <h1 className={styles.title}>Shopping page</h1>
      <ProductCard/>
    </section>
  );
};
