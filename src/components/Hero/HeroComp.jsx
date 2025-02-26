import Button from "@components/Shared/Button";
import hero from "@assets/hero-image.jpg";
import styles from "./HeroComp.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={`display-title ${styles.title}`}>Little Lemon</h1>
        <h2 className={`sub-title ${styles.subtitle}`}>Chicago</h2>
        <p className={`paragraph-text ${styles.description}`}>
          <span>We are a family owned </span>
          <span>Mediterranean restaurant, </span>
          <span>focused on traditional </span>
          <span>recipes served with a modern </span>
          twist.
        </p>
        <Button className={styles.cta}>Reserve a table</Button>
      </div>
      <div className={styles.content}>
        <img src={hero} alt="Hero Image" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default Hero;
