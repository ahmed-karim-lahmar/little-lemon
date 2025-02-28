import styles from "./IconCard.module.css";

const IconCard = ({ icon, className, children }) => {
  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.icon}>
        <img src={icon} alt="" />
      </div>
      <div className={`card-title ${styles.content}`}>{children}</div>
    </article>
  );
};

export default IconCard;
