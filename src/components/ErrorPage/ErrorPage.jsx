import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import errorImage from '../../assets/error.svg';

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.title}>An error was encountered!</h1>
      <img className={styles.errorImage} src={errorImage} alt="Error page image" />
      <Link className={styles.link} to="/">
        Back
      </Link>
    </div>
  );
};

export default ErrorPage;
