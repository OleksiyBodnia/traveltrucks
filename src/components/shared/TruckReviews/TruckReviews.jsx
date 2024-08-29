import { useSelector } from 'react-redux';
import styles from './TruckReviews.module.css';
import { selectTruck } from '../../../redux/catalog/selectors.js';
import Comment from '../Comment/Comment.jsx';

export default function TruckReviews() {
  const data = useSelector(selectTruck);
  return (
    <>
      {data ? (
        <div className={styles.conatiner}>
          {data.reviews
            ? data.reviews.map((item, index) => (
                <Comment data={item} key={index} />
              ))
            : null}
        </div>
      ) : null}
    </>
  );
}
