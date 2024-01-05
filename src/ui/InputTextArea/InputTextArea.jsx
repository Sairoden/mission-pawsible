// STYLES
import "./InputTextArea.scss";

function InputTextArea({ name = "", id = "" }) {
  return (
    <textarea
      name={name}
      id={id}
      cols={50}
      rows={10}
      className="input-textarea"
    />
  );
}

export default InputTextArea;
