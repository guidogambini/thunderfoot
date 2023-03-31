import styles from "./Card.module.css";

const Card = ({ title, image, type, date }) => {
  return (
    <li className={styles.card}>
      <div className={styles.imageDivision}>
        <img className={styles.cardImage} src={image} alt="" />
        <span className={styles.cardType}>{type}</span>
      </div>
      <div>
        <span className={styles.cardDate}>{date}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </li>
  );
};

export default Card;
