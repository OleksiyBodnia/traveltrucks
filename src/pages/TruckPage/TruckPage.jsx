import { useParams } from 'react-router-dom';
import styles from './TruckPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTruckById } from '../../redux/catalog/operations.js';
import TruckTitle from '../../components/shared/TruckTitle/TruckTitle.jsx';
import TruckPhotos from '../../components/shared/TruckPhotos/TruckPhotos.jsx';
import TruckDescription from '../../components/shared/TruckDescription/TruckDescription.jsx';
import { selectIsLoadingTruck } from '../../redux/catalog/selectors.js';
import Loader from '../../components/shared/Loader/Loader.jsx';

export default function TruckPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingTruck);

  useEffect(() => {
    if (id) {
      dispatch(fetchTruckById(id));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Loader width="100" height="100" color="var(--Rating)" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <TruckTitle />
      <TruckPhotos />
      <TruckDescription />
    </div>
  );
}
