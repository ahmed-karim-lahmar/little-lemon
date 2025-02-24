import logo from "@assets/logo.svg";

const Header = ({ children }) => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      {children}
    </header>
  );
};

export default Header;
