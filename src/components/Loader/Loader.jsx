import spinner from '../../assets/tadpole.svg';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <h1 className={styles.title}>Loading ...</h1>
      <img className={styles.spinner} src={spinner} alt='spinner' />
    </div>
  );
};
