import styles from "./RatingCard.module.css";
import placeholder from "@assets/placeholder.svg";
import star from "@assets/star.svg";

const RatingCard = ({ className, username, review, rating, children }) => {
  return (
    <article className={`${styles.card} ${className}`}>
      <img className={styles.userpic} src={placeholder} alt="User Picture" />
      <div>
        <h3>{username}</h3>
        <p>{review}</p>
        <div className={styles.stars}>
          {Array.from({ length: rating }).map((_, index) => (
            <img key={index} src={star} alt="" />
          ))}
        </div>
      </div>
    </article>
  );
};

export default RatingCard;
