import { RatingCard } from "@components/Shared";
import styles from "./TestimonialsComp.module.css";
import placeholder from "@assets/placeholder.svg";

// const cardTemplate = {
//   userpic: placeholder,
//   username: "testuser",
//   review: "lorem ipsum",
//   rating: 3,
// };

const users = [
  {
    userpic: "/user-1.png",
    username: "Julia",
    review: "My Favorite Restaurant!",
    rating: 5,
  },
  {
    userpic: "/user-2.png",
    username: "Lilly",
    review: "Had a Great Time!",
    rating: 4,
  },
  {
    userpic: "/user-3.png",
    username: "Jane",
    review: "Will be coming back for sure.",
    rating: 5,
  },
  {
    userpic: "/user-4.png",
    username: "Marco",
    review: "Lovely Service!",
    rating: 4,
  },
];
const Testimonials = () => {
  // const cards = Array.from({ length: 4 }).map((_, index) => ({
  //   ...cardTemplate,
  // }));
  return (
    <section className={styles.testimonials}>
      <h2 className={`${styles.title} sub-title`}>Testimonials</h2>
      <div className={styles.cards}>
        {users.map((card, index) => (
          <RatingCard key={index} {...card} className={styles.card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
