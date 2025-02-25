import { Button } from "@components/Shared";
import { SpecialCard } from "@components/Shared";
import styles from "./HighlightsComp.module.css";

const cardTemplate = {
  imageSrc: "/greek-salad.jpg",
  title: "test 1",
  price: "$12",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi praesentium incidunt at in totam eaque.",
};
const Highlights = () => {
  const cards = Array.from({ length: 5 }).map((_, index) => ({
    ...cardTemplate,
  }));
  return (
    <section className={styles.highlights}>
      <div className={styles.title}>
        <h2 className={`sub-title ${styles.subtitle}`}>
          This week&apos;s specials!
        </h2>
        <Button className={styles.cta}>Online Menu</Button>
      </div>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <SpecialCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            price={card.price}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Highlights;
