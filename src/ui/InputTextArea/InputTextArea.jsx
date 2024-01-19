// STYLES
import "./InputTextArea.scss";

function InputTextArea({ name = "", id = "", required = false, register }) {
  return (
    <textarea
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
