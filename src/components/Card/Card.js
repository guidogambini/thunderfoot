import styles from "./Card.module.css";

const Card = ({ title, image, type, date }) => {
  const screenWidth = window.screen.width;

  return (
    <li className={styles.card}>
      <div
        className={styles.imageDivision}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {screenWidth >= "600" && (
          <span className={styles.deskCardType}>{type}</span>
        )}
      </div>
      <div>
        <span className={styles.cardDate}>{date}</span>
        {screenWidth < "600" && (
          <span className={styles.mobileCardType}>{type}</span>
        )}
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
    </li>
  );
};

export default Card;
