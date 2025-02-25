import styles from "./SpecialCard.module.css";
import bike from "@assets/bike.svg";

const SpecialCard = ({
  className,
  imageSrc,
  title,
  price,
  description,
  children,
}) => {
  return (
    <article className={`${styles.card} ${className}`}>
      <img src={imageSrc} alt={`${title} image`} />
      <div>
        <h3 className="card-title">{title}</h3>
        <span className={`highlight-text ${styles.price}`}>{price}</span>
      </div>
      <p className={`paragraph-text`}>{description}</p>
      <a href="#">
        <span className="highlight-text">Order a delivery</span>
        <img src={bike} alt="" />
      </a>
    </article>
  );
};

export default SpecialCard;
