import { useSelector } from 'react-redux';
import styles from './TruckPhotos.module.css';
import { selectTruck } from '../../../redux/catalog/selectors.js';

export default function TruckPhotos() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={styles.container}>
          {data.gallery
            ? data.gallery.map((item, index) => (
                <img
                  src={item.original}
                  alt="truck photo"
                  key={index}
                  className={styles.photo}
                />
              ))
            : null}
        </div>
      ) : null}
    </>
  );
}
