import CustomSelect from "./CustomSelect";
import styles from "./FormInput.module.css";

const Input = ({ field, type, className, onBlur, ...props }) => {
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
      return (
        <textarea {...field} className={className} onBlur={onBlur} {...props} />
      );
    case "radio":
      return (
        <div className={styles.radio}>
          <input
            {...field}
            className={styles.radioInput}
            type={inputType}
            id={props.id}
            name={field.name}
            value={props.value}
            onBlur={onBlur}
            {...props}
          />
          <label className={`paragraph-text`} htmlFor={props.id}>
            {props.label}
          </label>
        </div>
      );

    case "time":
    case "guests":
    case "occasion":
      return (
        <CustomSelect
          inputIcon={props.icon || null}
          options={props.options}
          placeHolder={
            inputType === "time"
              ? "Choose time"
              : inputType === "guests"
              ? "Number of guests"
              : "Occasion"
          }
          onChange={props.handleChange}
          className={className}
          onBlur={onBlur}
          {...props}
        />
      );

    default:
      return (
        <input {...field} type={inputType} className={className} {...props} />
      );
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
