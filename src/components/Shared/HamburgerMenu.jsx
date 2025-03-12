import burger from "@assets/hamburger-menu.svg";
import close from "@assets/close-menu.svg";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`${styles.burgerMenu} ${open ? styles.open : ""}`}
      onClick={() => setOpen(!open)}
    >
      <img src={open ? close : burger} alt="Menu icon" />
    </div>
  );
};

export default HamburgerMenu;
