import CustomSelect from "./CustomSelect";
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

    case "guests":
      return (
        <CustomSelect
          inputIcon={props.icon || null}
          options={props.options}
          placeHolder="Number of guests"
          onChange={props.handleChange}
          className={className}
          {...props}
        />
      );

    case "occasion":
      return (
        <CustomSelect
          inputIcon={props.icon || null}
          options={props.options}
          placeHolder="Occasion"
          onChange={props.handleChange}
          className={className}
          {...props}
        />
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
