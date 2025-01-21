import { MinusIcon } from '../icons/MinusIcon';
import { PlusIcon } from '../icons/PlusIcon';
import products from '../mocks/products.json';
import styles from '../styles/ProductCard.module.css';
import {CartLogo} from '../icons/CartLogo';

export const ProductCard = () => {
  return (
    <section className={styles.products}>
      {products.map((product) => (
        <article className={styles.productData} key={product.id}>
          <p className={styles.title}>
            {product.title}
            <span className={styles.price}></span>
          </p>
          <p className={styles.price}>$ {product.price}</p>
          <div className={styles.imgCard}>
            <img
              className={styles.productImage}
              width={100}
              src={product.image}
              alt=''
            />
            <p>{product.description}</p>
          </div>

          <div className={styles.controls}>
            <button
              className={styles.roundedButton}
              type='button'
              onClick={() => {}}
            >
              <MinusIcon />
            </button>{' '}
            <input
              className={styles.quantityInput}
              onChange={() => {}}
              type='number'
              name='quantity'
              value={0}
            />
            <button
              className={styles.roundedButton}
              type='button'
              onClick={() => {}}
            >
              <PlusIcon />
            </button>
            <button className={styles.addButton} type='button'>
              <CartLogo/>
              Add to Cart
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};
