import { useDispatch } from 'react-redux';
import Filter from '../../components/shared/Filter/Filter.jsx';
import TrucksList from '../../components/shared/TrucksList/TrucksList.jsx';
import styles from './Catalog.module.css';
import { useEffect } from 'react';
import { fetchAllTrucksForFirstPage } from '../../redux/catalog/operations.js';

export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucksForFirstPage());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <Filter />
      <TrucksList />
    </div>
  );
}
