import { useParams } from 'react-router-dom';
import styles from './TruckPage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTruckById } from '../../redux/catalog/operations.js';
import TruckTitle from '../../components/shared/TruckTitle/TruckTitle.jsx';
import TruckPhotos from '../../components/shared/TruckPhotos/TruckPhotos.jsx';
import TruckDescription from '../../components/shared/TruckDescription/TruckDescription.jsx';

export default function TruckPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchTruckById(id));
    }
  }, [id, dispatch]);

  return (
    <div className={styles.container}>
      <TruckTitle />
      <TruckPhotos />
      <TruckDescription />
    </div>
  );
}
