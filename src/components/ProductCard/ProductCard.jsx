import { MinusIcon } from '../../icons/MinusIcon';
import { PlusIcon } from '../../icons/PlusIcon';
import styles from './ProductCard.module.css';
import { CartLogo } from '../../icons/CartLogo';
import PropTypes from 'prop-types';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('The product was \nadded successfully !');

export const ProductCard = ({
  product,
  cartItemsNumber,
  setItemsNumber,
  store,
  setStore
}) => {
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
    const newProduct = {
      ...product,
      quantity: quantity,
      amount: (quantity * product.price).toFixed(2)
    };

    if (quantity > 0) {
      const newQuantity = cartItemsNumber + quantity;
      setItemsNumber(newQuantity);
      notify();
      setQuantity(0);
      if (store.find((item) => item.id === product.id) === undefined) {
        setStore([...store, newProduct]);
      } else {
        const newStore = [...store];
        const index = newStore.findIndex((item) => item.id == product.id);
        const oldQuantity = newStore[index].quantity;
        setItemsNumber(newQuantity);
        setQuantity(0);
        newStore.splice(index, 1, {
          ...newProduct,
          quantity: quantity + oldQuantity,
          amount: (product.price * (quantity + oldQuantity)).toFixed(2)
        });
        setStore(newStore);
      }
    }
  };

  return (
    <article className={styles.products}>
      <Toaster />
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
            alt={product.title}
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
          <button
            className={styles.addButton}
            type='button'
            onClick={addToCart}
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
  setItemsNumber: PropTypes.func,
  store: PropTypes.array.isRequired,
  setStore: PropTypes.func.isRequired
};
