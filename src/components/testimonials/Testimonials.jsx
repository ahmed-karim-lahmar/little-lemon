import RatingCard from "./RatingCard";

const Testimonials = () => {
  return (
    <section>
      <h2>Testimonials</h2>
      <RatingCard username={"testuser"} review={"lorem ipsum"} rating={3} />
      <RatingCard username={"testuser"} review={"lorem ipsum"} rating={3} />
      <RatingCard username={"testuser"} review={"lorem ipsum"} rating={3} />
      <RatingCard username={"testuser"} review={"lorem ipsum"} rating={3} />
    </section>
  );
};

export default Testimonials;
