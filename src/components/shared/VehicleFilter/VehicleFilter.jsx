import styles from './VehicleFilter.module.css';
import Wind from '../../icons/Wind.jsx';
import Diagram from '../../icons/Diagram.jsx';
import Cup from '../../icons/Cup.jsx';
import TV from '../../icons/TV.jsx';
import Drop from '../../icons/Drop.jsx';
import Grid1x2 from '../../icons/Grid1x2.jsx';
import Grid3x3 from '../../icons/Grid3x3.jsx';
import Grid from '../../icons/Grid.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTrucksForFirstPage } from '../../../redux/catalog/operations.js';
import {
  selectAC,
  selectBathroom,
  selectForm,
  selectKitchen,
  selectTransmission,
  selectTV,
} from '../../../redux/filter/selectors.js';
import {
  setForm,
  setTransmission,
  toggleAC,
  toggleBathroom,
  toggleKitchen,
  toggleTV,
} from '../../../redux/filter/slice.js';
import toast from 'react-hot-toast';
import { selectIsLoading } from '../../../redux/catalog/selectors.js';
import Loader from "../Loader/Loader.jsx"

export default function VehicleFilter() {
  const form = useSelector(selectForm);
  const AC = useSelector(selectAC);
  const transmission = useSelector(selectTransmission);
  const kitchen = useSelector(selectKitchen);
  const tv = useSelector(selectTV);
  const bathroom = useSelector(selectBathroom);
  const isLoading = useSelector(selectIsLoading);
  const dispath = useDispatch();

  async function getAllTrucks() {
    try {
      await dispath(fetchAllTrucksForFirstPage()).unwrap();

      toast.success('Vehicles loaded successfully!');
    } catch {
      toast.error('Failed to load vehicles!');
    }
  }
  return (
    <div className={styles.conatiner}>
      <h3 className={styles.title}>Filters</h3>

      <h2 className={styles.scndTitle}>Vehicle equipment</h2>

      <div className={styles.equipment}>
        <div
          className={AC ? styles.eqItemActive : styles.eqItem}
          onClick={() => dispath(toggleAC())}
        >
          <Wind />
          <p className={styles.itemText}>AC</p>
        </div>
        <div
          className={transmission ? styles.eqItemActive : styles.eqItem}
          onClick={() => dispath(setTransmission())}
        >
          <Diagram />
          <p className={styles.itemText}>Automatic</p>
        </div>
        <div
          className={kitchen ? styles.eqItemActive : styles.eqItem}
          onClick={() => dispath(toggleKitchen())}
        >
          <Cup />
          <p className={styles.itemText}>Kitchen</p>
        </div>
        <div
          className={tv ? styles.eqItemActive : styles.eqItem}
          onClick={() => dispath(toggleTV())}
        >
          <TV />
          <p className={styles.itemText}>TV</p>
        </div>
        <div
          className={bathroom ? styles.eqItemActive : styles.eqItem}
          onClick={() => dispath(toggleBathroom())}
        >
          <Drop />
          <p className={styles.itemText}>Bathroom</p>
        </div>
      </div>

      <h2 className={styles.scndTitle}>Vehicle type</h2>
      <div className={styles.type}>
        <div
          className={
            form === 'panelTruck' ? styles.typeItemActive : styles.typeItem
          }
          onClick={() =>
            form === 'panelTruck'
              ? dispath(setForm(''))
              : dispath(setForm('panelTruck'))
          }
        >
          <Grid1x2 />
          <p className={styles.itemText}>Van</p>
        </div>
        <div
          className={
            form === 'fullyIntegrated' ? styles.typeItemActive : styles.typeItem
          }
          onClick={() =>
            form === 'fullyIntegrated'
              ? dispath(setForm(''))
              : dispath(setForm('fullyIntegrated'))
          }
        >
          <Grid3x3 />
          <p className={styles.itemText}>Fully Integrated</p>
        </div>
        <div
          className={
            form === 'alcove' ? styles.typeItemActive : styles.typeItem
          }
          onClick={() =>
            form === 'alcove'
              ? dispath(setForm(''))
              : dispath(setForm('alcove'))
          }
        >
          <Grid />
          <p className={styles.itemText}>Alcove</p>
        </div>
      </div>

      <button className={styles.searchBtn} onClick={getAllTrucks} disabled={isLoading}>
        {isLoading ? <Loader width={20} height={20} color='var(--White)'/> :"Search"}
      </button>
    </div>
  );
}
