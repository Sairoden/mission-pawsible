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
  size,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      style={styles}
      type={type}
      className={`button ${variation} ${className} ${
        disabled && "button-disabled"
      } button-${size}`}
      disabled={disabled}
    >
      {children}
      {icon && <img src="/paw.svg" alt="paw icon" className="button-icon" />}
    </button>
  );
};

export default Button;
