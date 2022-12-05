import styles from "./Input.module.scss";

function Input(props) {
  const {
    type,
    placeholder,
    required = false,
    onChange,
    value,
    disabled = false,
    name,
    classes
  } = props;
  return (
    <div className={`${styles["form-fld"]} ${classes ? classes : ""}`}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
