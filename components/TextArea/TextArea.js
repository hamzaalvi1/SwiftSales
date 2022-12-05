import styles from "./TextArea.module.scss";

function TextArea(props) {
  const { name, onChange, required, placeholder, value, classes } = props;
  return (
    <div className={`${styles["form-fld"]} ${classes ? classes : ""}`}>
      <textarea
        name={name}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        value={value}
      ></textarea>
    </div>
  );
}

export default TextArea;
