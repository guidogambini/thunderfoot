import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ label, link }) => {
  return (
    <button className={styles.primaryButton}>
      <a href={link}>{label}</a>
    </button>
  );
};

export default PrimaryButton;
