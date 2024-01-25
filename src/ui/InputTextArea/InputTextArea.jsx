// STYLES
import "./InputTextArea.scss";

function InputTextArea({
  name = "",
  id = "",
  required = false,
  register,
  defaultValue,
}) {
  return (
    <textarea
      defaultValue={defaultValue}
      name={name}
      id={id}
      cols={50}
      rows={10}
      className="input-textarea"
      {...register(id, {
        required,
      })}
    />
  );
}

export default InputTextArea;
