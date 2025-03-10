import { useState } from "react";
import styles from "./CustomSelect.module.css";
import { useRef } from "react";
import { useEffect } from "react";

const Icon = ({ isOpen }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="#222"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={isOpen ? styles.translate : ""}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

const CustomSelect = ({
  inputIcon,
  placeHolder,
  options,
  onChange,
  className,
  value,
  ...props
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    setSelectedValue(options.find((o) => o.value === value) || null);
  }, [options, value]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue) {
      return placeHolder;
    }

    return selectedValue.label;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
    onChange(option);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  return (
    <div
      className={`paragraph-text ${styles.dropdownContainer} ${
        selectedValue ? styles.hasSelected : ""
      }`}
      aria-labelledby={props["aria-labelledby"]}
      role="combobox"
    >
      <div
        ref={inputRef}
        onClick={handleInputClick}
        className={styles.dropdownInput}
        tabIndex={0}
        {...props}
      >
        {inputIcon && (
          <div className={styles.dropdownInputIcon}>
            <img src={inputIcon} alt="" />
          </div>
        )}
        <div
          className={`${styles.dropdownSelectedValue} ${
            !selectedValue ? styles.placeholder : ""
          }`}
        >
          {getDisplay()}
        </div>
        <div className={styles.dropdownTools}>
          <div className={styles.dropdownTool}>
            <Icon isOpen={showMenu} />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className={`${styles.dropdownMenu}`} role="listbox">
          {options.map((option, index) => (
            <div
              role="option"
              onClick={() => onItemClick(option)}
              key={`${option.value}-${index}`}
              className={`${styles.dropdownItem} ${
                isSelected(option) && styles.selected
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
