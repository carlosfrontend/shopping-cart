import sneakers from '../../assets/sneakers.jpg';
import perfume from '../../assets/perfume.jpg';
import hoodie from '../../assets/hoodie.jpg';
import smartphones from '../../assets/smartphones.jpg';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <h1 className={styles.title}>Welcome our store!</h1>
      <h2 className={styles.subtitle}>Lots of new items are waiting for you</h2>
      <div className={styles.buttonContainer}>
      <Link to={'shop'} className={styles.goLink}>Go to shop</Link>
      </div>
      <section className={styles.homeContainer}>
        <article className={styles.homeSection}>
          <img className={styles.cardImage} src={sneakers} alt='Some sneakers' />
          <img className={styles.cardImage} src={perfume} alt='A bottle of perfume' />
          <img className={styles.cardImage} src={hoodie} alt='A girl in a sweatshirt.' />
          <img className={styles.cardImage} src={smartphones} alt='A hand holding a smartphone and its case.' />
        </article>
      </section>
    </>
  );
};
