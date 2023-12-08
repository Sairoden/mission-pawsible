// STYLES
import "./Button.scss";

const Button = ({ variation, styles, children, icon }) => {
  return (
    <button
      style={styles}
      type="button"
      className={`button ${variation} ${icon && "button-icon-padding"}`}
    >
      {children}
      {icon && <img src="/paw.svg" alt="paw icon" className="button-icon" />}
    </button>
  );
};

export default Button;
