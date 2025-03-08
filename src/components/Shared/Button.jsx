import styles from "./Button.module.css";

const VARIANT_CLASSES = {
  primary: styles.primary,
  outlined: styles.outlined,
  disabled: styles.disabled,
};
const Button = ({
  onClick,
  className,
  variant = "primary",
  children,
  ...props
}) => {
  const variantClass = VARIANT_CLASSES[variant];
  return (
    <button
      className={`lead-text ${styles.cta} ${variantClass} ${className} ${
        props.disabled && styles.disabled
      }`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
