// STYLES
import "./InputTextArea.scss";

function InputTextArea({ cols = 50, rows = 10 }) {
  return (
    <textarea
      name=""
      id=""
      cols={cols}
      rows={rows}
      className="input-textarea"
    />
  );
}

export default InputTextArea;
