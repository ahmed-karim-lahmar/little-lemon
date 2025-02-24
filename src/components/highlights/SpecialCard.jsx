const SpecialCard = ({ title, price, description }) => {
  return (
    <article>
      <img src="" alt="" />
      <div>
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
      <p>{description}</p>
      <a href="">
        Order a delivery <img src="" alt="" />
      </a>
    </article>
  );
};

export default SpecialCard;
