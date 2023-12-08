import "./Input.scss";

function Input({
  id,
  styles,
  disabled = false,
  value,
  placeholder = "",
  onChange,
  height,
  width,
}) {
  return (
    <input
      style={{
        height,
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
