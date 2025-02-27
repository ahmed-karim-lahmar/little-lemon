import logo from "@assets/logo.svg";
import "./HeaderComp.css";
import { Link } from "react-router";

const Header = ({ children }) => {
  return (
    <header>
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      {children}
    </header>
  );
};

export default Header;
