import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage() {
  return <div className={styles.container}>
    <h1 className={styles.title}>Campers of your dreams</h1>
    <p className={styles.text}>You can find everything you want in our catalog</p>
    <Link className={styles.navBtn} to="/catalog">View Now</Link>
  </div>;
}
