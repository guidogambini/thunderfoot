import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ label, link, isSecondRender }) => {
  return (
    <button
      className={
        isSecondRender ? styles.blackPrimaryButton : styles.primaryButton
      }
    >
      <a className={styles.link} href={link}>
        {label}
      </a>
    </button>
  );
};

export default PrimaryButton;
