import Card from "../Card/Card";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import styles from "./CardsList.module.css";

const CardsList = () => {
  const postsData = {
    post_1: {
      date: "23-02-22",
      type: "Type A",
      title: "Journal 1",
      image: "https://tf-frontend.netlify.app/images/v1/post_1.png",
    },
    post_2: {
      date: "22-02-22",
      type: "Type A",
      title: "Journal 2 lorem title",
      image: "https://tf-frontend.netlify.app/images/v1/post_2.png",
    },
    post_3: {
      date: "21-02-22",
      type: "Type B",
      title: "Lorem ipsum title 3",
      image: "https://tf-frontend.netlify.app/images/v1/post_3.png",
    },
    post_4: {
      date: "20-02-22",
      type: "Type A",
      title: "This is the title 4",
      image: "https://tf-frontend.netlify.app/images/v1/post_4.png",
    },
  };
  return (
    <section className={styles.cardsListSection}>
      <h2 className={styles.listTitle}>Lorem Ipsum Dolor Sit Amet</h2>
      <ul className={styles.list}>
        {Object.keys(postsData).map((post) => (
          <Card
            title={postsData[post].title}
            image={postsData[post].image}
            type={postsData[post].type}
            date={postsData[post].date}
            key={postsData[post].title}
          />
        ))}
      </ul>
      <PrimaryButton label="Our Blog" />
    </section>
  );
};

export default CardsList;
