import Button from "@components/other/Button";
import SpecialCard from "./SpecialCard";

const Highlights = () => {
  return (
    <sections>
      <div>
        <h2>This week&apos;s specials!</h2>
        <Button>Online Menu</Button>
      </div>
      <div>
        <SpecialCard
          title="test 1"
          price="$12"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi praesentium incidunt at in totam eaque."
        />
        <SpecialCard
          title="test 2"
          price="$5"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi praesentium incidunt at in totam eaque."
        />
        <SpecialCard
          title="test 3"
          price="$10"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi praesentium incidunt at in totam eaque."
        />
      </div>
    </sections>
  );
};

export default Highlights;
