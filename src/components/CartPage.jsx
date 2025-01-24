import { useOutletContext } from 'react-router-dom';
import styles from '../styles/CartPage.module.css';
import { getSubtotal } from '../services/getSubtotal';
import { TrashIcon } from '../icons/TrashIcon';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('The product was removed correctly!');

export const CartPage = () => {
  const { cartItemsNumber, store, setStore, setCartItemsNumber } =
    useOutletContext();
  const amountArr = store.map((product) => Number(product.amount));

  const removeProduct = (id, quantity) => {
    const storeIndex = store.findIndex((product) => product.id === id);
    const newStore = store.slice();
    setCartItemsNumber((prev) => prev - quantity);
    newStore.splice(storeIndex, 1);
    setStore(newStore);
    notify()
  };

  return (
    <section className={styles.cartSection}>
      <h1 className={styles.title}>Cart page</h1>
      <h2 className={styles.subtitle}>
        Added {cartItemsNumber} products to the cart
      </h2>
      <div className={styles.storeContainer}>
          <Toaster />
        <div className={styles.store}>
          {store.map((product) => (
            <div className={styles.row} key={product.id}>
              <img
                className={styles.image}
                src={product.image}
                alt={product.title}
              />
              <div className={styles.details}>
                <h3>{product.title}</h3>
                <p className={styles.priceAndUnits}>
                  {' '}
                  ${product.price} X {product.quantity} ={' '}
                  <span className={styles.productTotal}>${product.amount}</span>
                  <button
                    title='Remove product'
                    className={styles.deleteButton}
                    onClick={() => removeProduct(product.id, product.quantity)}
                  >
                    <i className={styles.trashIcon}>
                      <TrashIcon />
                    </i>
                  </button>
                </p>
              </div>
            </div>
          ))}
          <div className={styles.subtotalContainer}>
            {store.length > 0 ? (
              <h2 className={styles.subtitle}>
                Subtotal:{' '}
                <span className={styles.subtotal}>
                  ${getSubtotal(amountArr)}
                </span>
              </h2>
            ) : (
              <h2 className={styles.subtitle}>
                Not there are products in the cart
              </h2>
            )}
            <button className={styles.checkoutBtn}>Checkout and pay</button>
          </div>
        </div>
      </div>
    </section>
  );
};
