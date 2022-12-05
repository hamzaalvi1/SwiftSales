import styles from "./Button.module.scss";

function Button(props) {
  const { type, title, onClick, classes } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles["primary-btn"]} ${classes ? classes : ""}`}
    >
      {title}
    </button>
  );
}

export default Button;
