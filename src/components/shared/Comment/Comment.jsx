import StarsArray from '../StartsArray/StarsArray.jsx';
import styles from './Comment.module.css';

export default function Comment({ data }) {
  return (
    <>
      {data ? (
        <div className={styles.container}>
          <div className={styles.personWrapper}>
            <div className={styles.avatar}>{data.reviewer_name.charAt(0).toUpperCase()}</div>
            <div className={styles.person}>
              <p className={styles.name}>{data.reviewer_name}</p>
              <StarsArray count={data.reviewer_rating} />
            </div>
          </div>
            <p className={styles.comment}>{data.comment}</p>
        </div>
      ) : null}
    </>
  );
}
