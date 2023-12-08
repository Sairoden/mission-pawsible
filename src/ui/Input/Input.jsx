import "./Input.scss";

function Input({
  id,
  styles,
  disabled = false,
  value,
  placeholder = "",
  onChange,
  width,
}) {
  return (
    <input
      style={{
        width,
      }}
      type="text"
      id={id}
      disabled={disabled}
      className={`input ${styles}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
