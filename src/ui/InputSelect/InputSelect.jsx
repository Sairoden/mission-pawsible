// STYLES
import "./InputSelect.scss";

function InputSelect({ width }) {
  return (
    <select name="cars" id="cars" className="input-select" style={{ width }}>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
}

export default InputSelect;
