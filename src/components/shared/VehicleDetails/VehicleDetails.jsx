import { useSelector } from 'react-redux';
import styles from './VehicleDetails.module.css';
import { selectTruck } from '../../../redux/catalog/selectors.js';
import formatFormTruck from '../../../utils/formatFormTruck.js';
import formatQuantity from '../../../utils/formatQuantity.js';

export default function VehicleDetails() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={styles.container}>
          <h2 className={styles.title}>Vehicle details</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.text}>Form</span>
              <span className={styles.text}>
                {data.form ? formatFormTruck(data.form) : null}
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.text}>Length</span>
              <span className={styles.text}>
                {data.length ? formatQuantity(data.length) : null}
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.text}>Width</span>
              <span className={styles.text}>
                {data.width ? formatQuantity(data.width) : null}
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.text}>Height</span>
              <span className={styles.text}>
                {data.height ? formatQuantity(data.height) : null}
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.text}>Tank</span>
              <span className={styles.text}>
                {data.tank ? formatQuantity(data.tank) : null}
              </span>
            </li>
            <li className={styles.item}>
              <span className={styles.text}>Consumption</span>
              <span className={styles.text}>{data.consumption}</span>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
