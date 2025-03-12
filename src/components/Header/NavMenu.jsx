import { NavLink } from "react-router";
import styles from "./NavMenu.module.css";

const NavMenu = ({ className, setOpen }) => {
  const style = ({ isActive }) => (isActive ? styles.current : "");
  console.log(className);
  return (
    <nav className={className}>
      <ul>
        <li>
          <NavLink to="/" className={style} onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={style} onClick={() => setOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={style} onClick={() => setOpen(false)}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={style}
            onClick={() => setOpen(false)}
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/order-online"
            className={style}
            onClick={() => setOpen(false)}
          >
            Order online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={style} onClick={() => setOpen(false)}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
