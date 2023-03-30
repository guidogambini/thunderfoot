import Card from "../Card/Card";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const CardsList = () => {
  const posts = {
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
    <section>
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
      <ul>
        {Object.keys(posts).map((post) => (
          <Card
            title={posts[post].title}
            image={posts[post].image}
            type={posts[post].type}
            date={posts[post].date}
            key=""
          />
        ))}
      </ul>
      <PrimaryButton text="Our Blog" />
    </section>
  );
};
