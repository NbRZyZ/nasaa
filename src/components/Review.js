import { FaStar } from "react-icons/fa";
import styles from "../styles/components/Review.module.css";
import amy from "../assets/amy.png";


export const Review = (props) => {
  return (
    <div className={styles.box}>
      <div className={styles.starbox}>
        <FaStar className={styles.od} />
        <FaStar className={styles.od} />
        <FaStar className={styles.od} />
        <FaStar className={styles.od} />
        <FaStar className={styles.od} />
      </div>
      <div className={styles.text}>
       
        {props.text}
      </div>
      <div className={styles.acc}>
        <img src={amy} className={styles.image} />
        <h3 className={styles.ner}>{props.name}</h3>
      </div>
    </div>
  );
};
