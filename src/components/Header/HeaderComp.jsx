import logo from "@assets/logo.svg";
import "./HeaderComp.css";

const Header = ({ children }) => {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="Logo" />
      </a>
      {children}
    </header>
  );
};

export default Header;
