import styles from "./FormInput.module.css";

const Input = ({ type, className, ...props }) => {
  const validTypes = [
    "textarea",
    "email",
    "text",
    "password",
    "number",
    "date",
    "time",
    "occasion",
    "guests",
    "radio",
  ];

  const inputType = validTypes.includes(type) ? type : "text";

  switch (inputType) {
    case "textarea":
      return <textarea className={className} {...props} />;
    case "radio":
      return (
        <div className={styles.radio}>
          <input
            className={styles.radioInput}
            type={inputType}
            id={props.id}
            name={props.name}
            value={props.value}
            checked={props.checked}
            {...props}
          />
          <label className={`paragraph-text`} htmlFor={props.id}>
            {props.label}
          </label>
        </div>
      );

    case "time":
      return (
        <select className={className} {...props}>
          {props.options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      );
    default:
      return <input type={inputType} className={className} {...props} />;
  }
};

const FormInput = ({ type, className, ...props }) => {
  return (
    <Input
      type={type}
      className={`paragraph-text ${styles.formInput} ${className}`}
      {...props}
    />
  );
};

export default FormInput;
