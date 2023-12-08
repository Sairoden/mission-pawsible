import "./Input.scss";

function Input({
  id,
  styles,
  disabled = false,
  value,
  placeholder = "",
  onChange,
  width,
  type = "text",
}) {
  return (
    <input
      style={{
        width,
      }}
      type={type}
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
