import footerLogo from "@assets/footer-logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={footerLogo} alt="Footer Logo" height={200} />
      <div className="doormat">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservations</a>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h4>Contact</h4>
        <ul>
          <li>
            <a href="">Address</a>
          </li>
          <li>
            <a href="">Phone Number</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>
        </ul>
      </div>
      <div className="socials">
        <h4>Social Media Links</h4>
        <ul>
          <li>
            <a href="">Address</a>
          </li>
          <li>
            <a href="">Phone Number</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
