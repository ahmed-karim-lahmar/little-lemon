import { Button } from "@components/Shared";
import styles from "./Banner.module.css";

const Banner = () => {
  const scrollToForm = () => {
    const destination = document.getElementById("#reservation");
    destination.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={`overlayed ${styles.banner}`}>
      <div className={styles.content}>
        <h1 className={`display-title ${styles.title}`}>Reservations</h1>
        <h2 className={`lead-text ${styles.subtitle}`}>
          We Serve All Holidays
        </h2>
        <Button
          variant="outlined"
          onClick={scrollToForm}
          className={`${styles.scrollToFormBtn}`}
        >
          Book a Table
        </Button>
      </div>
    </section>
  );
};

export default Banner;
