import { useOutletContext } from 'react-router-dom';
import styles from '../styles/CartPage.module.css';

export const CartPage = () => {
  const { cartItemsNumber, store } = useOutletContext();
  const amount = store.map((product) => Number(product.amount));
  return (
    <section className={styles.cartSection}>
      <h1 className={styles.title}>Cart page</h1>
      <h2 className={styles.subtitle}>
        Added {cartItemsNumber} products to the cart
      </h2>
      <div className={styles.store}>
        {store.map((product) => (
          <div className={styles.row} key={product.id}>
            <img className={styles.image} src={product.image} alt={product.title} />
            <h3>
              {product.title} - ${product.price} X {product.quantity} = $
              {product.amount}
            </h3>
          </div>
        ))}
        <div>
          {store.length > 0 ? (
            <h2>
              Subtotal: $
              {amount.reduce((total, currVal) => total + currVal).toFixed(2)}
            </h2>
          ) : (
            <h2>Not there are products in the cart</h2>
          )}
          <button>Checkout and pay</button>
        </div>
      </div>
    </section>
  );
};
