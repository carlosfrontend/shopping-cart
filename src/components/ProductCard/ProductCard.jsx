import { Minus, Plus, ShoppingBasketIcon } from "lucide-react";
import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [value, setValue] = useState(0);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
    
    if (value <= 0) {
      setValue(0);
    }
  };

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.productImage} src={product.image} alt="" />
        <p className={styles.price}>$ {product.price}</p>
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.inputContainer}>
          <button className={styles.minus} onClick={handleDecrement}>
            <Minus />
          </button>
          <input
            min={0}
            type="number"
            value={value}
            onChange={handleInputChange}
          />
          <button className={styles.plus} onClick={handleIncrement}>
            <Plus />
          </button>
        </div>
        <div className={styles.addContainer}>
          <button className={styles.addButton}>
            <ShoppingBasketIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
