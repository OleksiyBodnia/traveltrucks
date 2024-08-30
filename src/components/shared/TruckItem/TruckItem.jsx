import styles from './TruckItem.module.css';
import YellowStar from '../../icons/YellowStar.jsx';
import LocationActive from '../../icons/LocationActive.jsx';
import TruckOption from '../TruckOption/TruckOption.jsx';
import { Link } from 'react-router-dom';
import Heart from '../../icons/Heart.jsx';
import RedHeart from '../../icons/RedHeart.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteList } from '../../../redux/favorite/selectors.js';
import { toggleFavorite } from '../../../redux/favorite/slice.js';

export default function TruckItem({ data }) {
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoriteList);
  const isFavorite = favoriteList.includes(data.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(data.id));
  };

  return (
    <div className={styles.container}>
      <img
        src={data.gallery[0].thumb}
        alt="truck photo"
        className={styles.photo}
      />
      <div className={styles.data}>
        <div className={styles.head}>
          <h2 className={styles.name}>{data.name}</h2>
          <div className={styles.priceWrapper}>
            <p className={styles.price}>€{data.price}.00</p>
            <div onClick={handleFavoriteClick}>
              {isFavorite ? (
                <RedHeart width="26" height="24" />
              ) : (
                <Heart width="26" height="24" />
              )}
            </div>
          </div>
        </div>

        <div className={styles.rating}>
          <span className={styles.text}>
            <div className={styles.star}>
              <YellowStar />
            </div>
            {`${data.rating}(${data.reviews.length} Reviews)`}
          </span>
          <span className={styles.location}>
            <LocationActive width={16} height={16} />
            {data.location}
          </span>
        </div>

        <p className={styles.description}>{data.description}</p>
        <TruckOption data={data} />
        <Link to={`/catalog/${data.id}`} className={styles.showMoreBtn}>
          Show more
        </Link>
      </div>
    </div>
  );
}
