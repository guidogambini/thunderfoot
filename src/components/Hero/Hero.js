import PrimaryButton from "../PrimaryButton/PrimaryButton";
import UseAppContext from "../../hooks/UseAppContext";
import styles from "./Hero.module.css";

const Hero = () => {
  const { heroData } = UseAppContext();

  const isSecondRender = JSON.parse(
    localStorage.getItem("applicationPreviouslyAccessed")
  );

  if (!isSecondRender) {
    localStorage.setItem("applicationPreviouslyAccessed", true);
  }

  // const heroTitle = isSecondRender
  //   ? heroData.title.second_time_accessing
  //   : heroData.title.first_time_accessing;

  // const heroButtonLabel = isSecondRender
  //   ? heroData.button_label.second_time_accessing
  //   : heroData.button_label.first_time_accessing;

  return (
    <section
      className={styles.heroContainer}
      style={{
        backgroundImage:
          "https://tf-frontend.netlify.app/images/v1/bgimage.png",
      }}
    >
      <h1 className={styles.heroTitle}>Lorem Ipsum</h1>
      <p className={styles.heroSubtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vehicula mauris, orci vel faucibus ac tincidunt.
      </p>
      <PrimaryButton label="Button Label" link="clarin.com" />
    </section>
  );
};

export default Hero;
