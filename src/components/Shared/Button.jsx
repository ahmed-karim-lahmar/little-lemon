import styles from "./Button.module.css";

const Button = ({ className, children }) => {
  return (
    <button className={`lead-text ${styles.cta} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
