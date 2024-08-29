import { useSelector } from 'react-redux';
import styles from './TruckMainInfo.module.css';
import { selectTruck } from '../../../redux/catalog/selectors.js';
import TruckOption from '../TruckOption/TruckOption.jsx';
import VehicleDetails from '../VehicleDetails/VehicleDetails.jsx';

export default function TruckMainInfo() {
  const data = useSelector(selectTruck);
  return <>{data ? <div className={styles.container}>
    <TruckOption data={data}/>
    <VehicleDetails />
  </div> : null}</>;
}
