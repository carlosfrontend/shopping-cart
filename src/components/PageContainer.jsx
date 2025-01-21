import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import styles from '../styles/PageContainer.module.css';
import { Footer } from './Footer';
export const PageContainer = () => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
