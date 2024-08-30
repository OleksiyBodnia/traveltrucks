import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import photo from '../../../assets/Logo.png';
import photo2x from '../../../assets/Logo@2x.png';

export default function NavigationBar() {
  return (
    <div className={styles.container}>
      <picture>
        <source srcSet={`${photo2x} 2x`} />
        <img src={photo} alt="logotype" className={styles.img} />
      </picture>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to="/catalog"
        end
      >
        Catalog
      </NavLink>
    </div>
  );
}
