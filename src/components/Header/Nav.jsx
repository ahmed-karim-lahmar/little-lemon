import "./Nav.css";
import burger from "@assets/hamburger-menu.svg";
const Nav = () => {
  return (
    <>
      <div className="burger">
        <img src={burger} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order-online">Order online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
