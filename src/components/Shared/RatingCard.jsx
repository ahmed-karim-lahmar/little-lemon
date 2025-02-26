import styles from "./RatingCard.module.css";
import star from "@assets/star.svg";

const RatingCard = ({
  className,
  userpic,
  username,
  review,
  rating,
  children,
}) => {
  return (
    <article className={`${styles.card} ${className}`}>
      <img className={styles.userpic} src={userpic} alt="User Picture" />
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
