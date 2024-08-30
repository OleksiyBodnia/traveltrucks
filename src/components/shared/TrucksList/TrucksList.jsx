import { useDispatch, useSelector } from 'react-redux';
import styles from './TrucksList.module.css';
import {
  selectAllTrucks,
  selectHasMore,
  selectIsLoading,
} from '../../../redux/catalog/selectors.js';
import { fetchAllTrucks } from '../../../redux/catalog/operations.js';
import TruckItem from '../TruckItem/TruckItem.jsx';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader.jsx';

export default function TrucksList() {
  const dispatch = useDispatch();
  const hasNextPage = useSelector(selectHasMore);
  const trucks = useSelector(selectAllTrucks);
  const isLoading = useSelector(selectIsLoading);

  async function getNextPageTrucks() {
    try {
      await dispatch(fetchAllTrucks()).unwrap();
      toast.success('Vehicles loaded successfully!');
    } catch {
      toast.error('Failed to load vehicles!');
    }
  }
  return (
    <div className={styles.container}>
      {trucks.length > 0
        ? trucks.map(item => <TruckItem key={item.id} data={item} />)
        : null}
      {hasNextPage ? (
        <button className={styles.loadMore} onClick={getNextPageTrucks} disabled={isLoading}>
          {isLoading ? <Loader width="20" height="20" color='var(--Main)'/> : "Load more"}
        </button>
      ) : null}
    </div>
  );
}
