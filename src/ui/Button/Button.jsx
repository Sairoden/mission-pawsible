// STYLES
import "./Button.scss";

const Button = ({
  variation,
  styles,
  children,
  icon,
  onClick,
  type = "button",
  disabled = false,
  iconStyles,
}) => {
  return (
    <button
      onClick={onClick}
      style={styles}
      type={type}
      className={`button ${variation} ${disabled && "button-disabled"}`}
      disabled={disabled}
    >
      {children}
      {icon && <img src="/paw.svg" alt="paw icon" className="button-icon" />}
    </button>
  );
};

export default Button;
