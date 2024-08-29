import { useSelector } from 'react-redux';
import styles from './TruckDescription.module.css';
import { selectTruck } from '../../../redux/catalog/selectors.js';
import { useState } from 'react';
import TruckMainInfo from '../TruckMainInfo/TruckMainInfo.jsx';
import TruckReviews from '../TruckReviews/TruckReviews.jsx';
import Form from "../Form/Form.jsx"

export default function TruckDescription() {
  const [isLinkActive, setIsLinkActive] = useState('features');
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={styles.container}>
          <p className={styles.description}>{data.description}</p>
          <div className={styles.info}>
            <div className={styles.links}>
              <span
                className={styles.features}
                onClick={() => setIsLinkActive('features')}
              >
                Features
              </span>
              <span
                className={styles.reviews}
                onClick={() => setIsLinkActive('reviews')}
              >
                Reviews
              </span>
              <div
                className={
                  isLinkActive === 'features'
                    ? styles.underlineRight
                    : styles.underlineLeft
                }
              ></div>
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.detailsReviews}>
                {isLinkActive === 'features' ? <TruckMainInfo /> : <TruckReviews />} 
            </div>
            <Form />
          </div>
        </div>
      ) : null}
    </>
  );
}
