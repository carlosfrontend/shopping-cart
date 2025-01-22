import { MinusIcon } from '../icons/MinusIcon';
import { PlusIcon } from '../icons/PlusIcon';
import styles from '../styles/ProductCard.module.css';
import { CartLogo } from '../icons/CartLogo';
import PropTypes from 'prop-types';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('The product was \nadded successfully !');

export const ProductCard = ({ product, cartItemsNumber, setItemsNumber }) => {
  const [quantity, setQuantity] = useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value < 0) return;
    setQuantity(Number(value));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const addToCart = () => {
    const newQuantity = cartItemsNumber + quantity;
    if (quantity > 0) {
      setItemsNumber(newQuantity);
      notify();
      setQuantity(0)
    }
  };

  return (
    <article className={styles.products}>
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
            onClick={handleDecrement}
          >
            <MinusIcon />
          </button>{' '}
          <input
            id={product.id}
            className={styles.quantityInput}
            onChange={handleChange}
            type='number'
            name='quantity'
            value={quantity}
          />
          <button
            className={styles.roundedButton}
            type='button'
            onClick={handleIncrement}
          >
            <PlusIcon />
          </button>
          <Toaster />
          <button
            className={styles.addButton}
            type='button'
            onClick={(quantity) => addToCart(quantity)}
          >
            <CartLogo />
            Add to Cart
          </button>
        </div>
      </article>
    </article>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number
    })
  }),
  cartItemsNumber: PropTypes.number,
  setItemsNumber: PropTypes.func
};
