import PrimaryButton from "../PrimaryButton/PrimaryButton";
import styles from "./Hero.module.css";

const Hero = ({ title, subtitle, image, buttonLabel, buttonLink }) => {
  const isSecondRender = JSON.parse(
    localStorage.getItem("applicationPreviouslyAccessed")
  );

  if (!isSecondRender) {
    localStorage.setItem("applicationPreviouslyAccessed", true);
  }

  const heroTitle = isSecondRender
    ? title.second_time_accessing
    : title.first_time_accessing;

  const heroButtonLabel = isSecondRender
    ? buttonLabel.second_time_accessing
    : buttonLabel.first_time_accessing;

  return (
    <section
      className={styles.heroSection}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h1 className={styles.heroTitle}>{heroTitle}</h1>
      <p className={styles.heroSubtitle}>{subtitle}</p>
      <PrimaryButton
        label={heroButtonLabel}
        link={buttonLink}
        isSecondRender={isSecondRender}
      />
    </section>
  );
};

export default Hero;
