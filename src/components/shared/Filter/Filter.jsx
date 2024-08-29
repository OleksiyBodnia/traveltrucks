import LocatiionFilter from '../LocatiionFilter/LocatiionFilter.jsx';
import VehicleFilter from '../VehicleFilter/VehicleFilter.jsx';
import styles from './Filter.module.css';

export default function Filter() {
  return (
    <div className={styles.container}>
        <LocatiionFilter />
        <VehicleFilter />
    </div>
  );
}
