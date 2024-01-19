// STYLES
import "./InputSelect.scss";

function InputSelect({
  id,
  required = false,
  disabled = false,
  onChange,
  options,
  value,
  ...props
}) {
  return (
    <select
      {...props}
      name={id}
      id={id}
      className="input-select"
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default InputSelect;
