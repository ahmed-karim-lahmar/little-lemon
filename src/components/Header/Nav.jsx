import { NavLink } from "react-router";
import "./Nav.css";
import burger from "@assets/hamburger-menu.svg";
const Nav = () => {
  const style = ({ isActive }) => (isActive ? "current" : "");
  return (
    <>
      <div className="burger">
        <img src={burger} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={style}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={style}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={style}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" className={style}>
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/order-online" className={style}>
              Order online
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={style}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
