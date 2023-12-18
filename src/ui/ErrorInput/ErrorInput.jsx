// STYLES
import "./ErrorInput.scss";

function ErrorInput({ children }) {
  return (
    <span className="error-input">
      {children} {children && "🐕"}
    </span>
  );
}

export default ErrorInput;
