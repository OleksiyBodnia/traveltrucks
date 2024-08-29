import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css';

export default function NavigationBar() {
  return (
    <div className={styles.container}>
      <img
        src="../../../assets/Logo.png"
        alt="logotype"
        className={styles.img}
      />
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
    </div>
  );
}
