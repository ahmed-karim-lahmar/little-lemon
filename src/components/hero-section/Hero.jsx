import Button from "@components/other/Button";
import hero from "@assets/hero-image.jpg";

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button>Reserve a table</Button>
      </div>
      <div>
        <img src={hero} alt="Hero Image" height={200}/>
      </div>
    </section>
  );
};

export default Hero;
