import { RatingCard } from "@components/Shared";
import styles from "./TestimonialsComp.module.css";

const cardTemplate = {
  username: "testuser",
  review: "lorem ipsum",
  rating: 3,
};
const Testimonials = () => {
  const cards = Array.from({ length: 3 }).map((_, index) => ({
    ...cardTemplate,
  }));
  return (
    <section className={styles.testimonials}>
      <h2 className={`${styles.title} sub-title`}>Testimonials</h2>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <RatingCard key={index} {...card} className={styles.card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
