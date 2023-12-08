// STYLES
import "./Button.scss";

const Button = ({ variation, styles, children, icon }) => {
  return (
    <button
      type="button"
      className={`button ${styles} ${variation} ${
        icon && "button-icon-padding"
      }`}
    >
      {children}
      {icon && <img src="/paw.svg" alt="paw icon" className="button-icon" />}
    </button>
  );
};

export default Button;
