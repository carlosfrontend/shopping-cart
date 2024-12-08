import styles from './Loading.module.css'
import spinnerImage from '../../assets/gooey-balls-1.svg';

const Loading = () => {
    return <div className={styles.loadingContainer}>
        <img src={spinnerImage} alt="spinner" />
        <h1>Loading ...</h1>
    </div>
}

export default Loading;