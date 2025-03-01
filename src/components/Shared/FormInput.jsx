import styles from "./FormInput.module.css";

const FormInput = ({ type, className, children, ...props }) => {
  //   console.log("-->", props);
  const Input = ({ className, ...props }) => {
    // console.log(className, "==>", props);
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
            {console.log(props)}
            <input
              className={styles.radioInput}
              type={inputType}
              id={props.id}
              name={props.name}
              value={props.value}
            />
            <label className={`paragraph-text`} htmlFor={props.id}>
              {props.label}
            </label>
          </div>
        );

      default:
        return <input type={inputType} className={className} {...props} />;
    }
  };
  return (
    <Input
      className={`paragraph-text ${styles.formInput} ${className}`}
      {...props}
    />
  );
};

export default FormInput;

/*
const FormInput = ({ type, className, children, ...props }) => {
  const Input = (className) => {
    // Default to "text" if type is omitted or invalid
    const validTypes = ["text", "password", "email", "textarea", "number", "date"];
    const inputType = validTypes.includes(type) ? type : "text"; 

    switch (inputType) {
      case "textarea":
        return <textarea className={className} {...props} />;
      case "text":
      case "password":
      case "email":
      case "number":
      case "date":
        return <input type={inputType} className={className} {...props} />;
      default:
        return <input type="text" className={className} {...props} />;
    }
  };

  return (
    <Input className={`paragraph-text ${styles.formInput} ${className}`} />
  );
};
*/
