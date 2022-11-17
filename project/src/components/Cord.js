import styles from "../styles/components/Cord.module.css";
import imageC from "../assets/ImageC.png";

export const Cord = (props) => {
  return (
    <div className={styles.boxC}>
      <img src={props.image} className={styles.imageC} />
      <p className={styles.data}>{props.text}</p>
      <p className={styles.word}>{props.text}</p>
      <p className={styles.word}>{props.text}</p>
      <div className={styles.user}>
        <img src={props.owner.picture} className={styles.amy2} />
        <p>
          {props.owner.firstName} {props.owner.lastName}
        </p>
        <div className={styles.vl}></div>
        <p>{props.publishDate}</p>
      </div>
    </div>
  );
};
