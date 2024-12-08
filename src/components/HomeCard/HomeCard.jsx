import PropTypes from "prop-types";
import styles from "./HomeCard.module.css";
import { Link } from "react-router-dom";
const HomeCard = ({ slogan, imageUrl, category,description, pathName }) => {
  return (
    <div className={styles.homeCard}>
      <div className={styles.offers}>
        <h2>{slogan}</h2>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageUrl} alt={category + ' image'} />
      </div>
      <div className={styles.contentContainer}>
        {" "}
        <h3 className={styles.category}>{category}</h3>
        <p className={styles.description}>
          {description}
        </p>
        <Link to={pathName} className={styles.link}>
          Take a look
        </Link>
      </div>
    </div>
  );
};

HomeCard.propTypes = {
  slogan: PropTypes.string,
  imageUrl: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  pathName: PropTypes.string
};

export default HomeCard;
