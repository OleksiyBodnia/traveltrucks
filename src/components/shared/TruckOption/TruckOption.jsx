import styles from './TruckOption.module.css';
import Diagram from '../../icons/Diagram.jsx';
import Wind from '../../icons/Wind.jsx';
import Petrol from '../../icons/Petrol.jsx';
import Cup from '../../icons/Cup.jsx';
import Radio from '../../icons/Radio.jsx';
import Drop from '../../icons/Drop.jsx';

export default function TruckOption({data}) {
  return (
    <div className={styles.container}>
      {data.transmission === 'automatic' ? (
        <div className={styles.optionItem}>
          <Diagram width={20} height={20} />
          <p className={styles.optionText}>Automatic</p>
        </div>
      ) : null}
      {data.AC ? (
        <div className={styles.optionItem}>
          <Wind width={20} height={20} />
          <p className={styles.optionText}>AC</p>
        </div>
      ) : null}
      {data.gas ? (
        <div className={styles.optionItem}>
          <Petrol width={20} height={20} />
          <p className={styles.optionText}>Petrol</p>
        </div>
      ) : null}
      {data.kitchen ? (
        <div className={styles.optionItem}>
          <Cup width={20} height={20} />
          <p className={styles.optionText}>Kitchen</p>
        </div>
      ) : null}
      {data.radio ? (
        <div className={styles.optionItem}>
          <Radio width={20} height={20} />
          <p className={styles.optionText}>Radio</p>
        </div>
      ) : null}
      {data.bathroom ? (
        <div className={styles.optionItem}>
          <Drop width={20} height={20} />
          <p className={styles.optionText}>Bathroom</p>
        </div>
      ) : null}
    </div>
  );
}
