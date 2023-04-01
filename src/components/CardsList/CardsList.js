import Card from "../Card/Card";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import styles from "./CardsList.module.css";

const CardsList = ({ title, list, buttonLabel, buttonLink }) => {
  return (
    <section className={styles.cardsListSection}>
      <h2 className={styles.listTitle}>{title}</h2>
      <ul className={styles.list}>
        {Object.keys(list).map((post) => (
          <Card
            title={list[post].title}
            image={list[post].image}
            type={list[post].type}
            date={list[post].date}
            key={list[post].title}
          />
        ))}
      </ul>
      <PrimaryButton label={buttonLabel} link={buttonLink} />
    </section>
  );
};

export default CardsList;
