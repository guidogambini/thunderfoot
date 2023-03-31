import PrimaryButton from "../PrimaryButton/PrimaryButton";
import UseAppContext from "../../hooks/UseAppContext";

const Hero = () => {
  const { heroData } = UseAppContext();

  const isSecondRender = JSON.parse(
    localStorage.getItem("applicationPreviouslyAccessed")
  );

  if (!isSecondRender) {
    localStorage.setItem("applicationPreviouslyAccessed", true);
  }

  const heroTitle = isSecondRender
    ? heroData.title.second_time_accessing
    : heroData.title.first_time_accessing;

  const heroButtonLabel = isSecondRender
    ? heroData.button_label.second_time_accessing
    : heroData.button_label.first_time_accessing;

  return (
    <section style={{ backgroundImage: heroData.bg_image }}>
      <div>
        <h1>{heroTitle}</h1>
        <p>{heroData.subtitle}</p>
        <PrimaryButton label={heroButtonLabel} link={heroData.button_link} />
      </div>
    </section>
  );
};

export default Hero;
