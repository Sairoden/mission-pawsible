// STYLES
import "./InputTextArea.scss";

function InputTextArea({ name = "", id = "", required = false }) {
  return (
    <textarea
      name={name}
      id={id}
      cols={50}
      rows={10}
      className="input-textarea"
      required={required}
    />
  );
}

export default InputTextArea;
