import YellowStar from "../../icons/YellowStar.jsx";
import Star from "../../icons/Star.jsx";
import styles from "./StartsArray.module.css"

export default function StarsArray({count}) {
    const totalStars = 5;

    const stars = Array.from({ length: totalStars }, (_, index) => {
      return index < count ? <YellowStar key={index} /> : <Star key={index} />;
    });
  
    return <div className={styles.container}>{stars}</div>;
}
