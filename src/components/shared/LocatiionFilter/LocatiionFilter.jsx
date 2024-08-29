import styles from './LocatiionFilter.module.css';
import LocationActive from '../../icons/LocationActive.jsx';
import Location from '../../icons/Location.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocation } from '../../../redux/filter/selectors.js';
import { setLocation } from '../../../redux/filter/slice.js';

export default function LocatiionFilter() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocation);

  function handleEnterLocation(e) {
    const value = e.target.value.trim();
    dispatch(setLocation(value));
  }

  return (
    <div className={styles.location}>
      <label htmlFor="location" className={styles.label}>
        Location
      </label>
      <input
        type="text"
        id="location"
        className={styles.locationInput}
        placeholder="City"
        onChange={handleEnterLocation}
        value={location}
      />
      <div className={styles.locationWrapper}>
        {location ? (
          <div className={styles.locationActiveIcon}>
            <LocationActive width={20} height={20} />
          </div>
        ) : (
          <div className={styles.locationIcon}>
            <Location width={20} height={20} />
          </div>
        )}
      </div>
    </div>
  );
}
