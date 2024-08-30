import styles from './TruckTitle.module.css';
import YellowStar from '../../icons/YellowStar.jsx';
import LocationActive from '../../icons/LocationActive.jsx';
import { useSelector } from 'react-redux';
import { selectTruck } from '../../../redux/catalog/selectors.js';

export default function TruckTitle() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={styles.container}>
          <h2 className={styles.name}>{data.name}</h2>
          <div className={styles.rating}>
            <span className={styles.text}>
              <div className={styles.star}>
                <YellowStar />
              </div>
              <span className={styles.reviews}>{`${data.rating}(${
                data.reviews ? data.reviews.length : null
              } Reviews)`}</span>
            </span>
            <span className={styles.location}>
              <LocationActive width={16} height={16} />
              {data.location}
            </span>
          </div>
          <p className={styles.price}>€{data.price}.00</p>
        </div>
      ) : null}
    </>
  );
}
