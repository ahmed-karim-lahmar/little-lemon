import logo from "@assets/logo.svg";
import "./HeaderComp.css";

const Header = ({ children }) => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      {children}
    </header>
  );
};

export default Header;
