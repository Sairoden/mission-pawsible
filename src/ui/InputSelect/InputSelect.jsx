// STYLES
import "./InputSelect.scss";

function InputSelect({ name, id }) {
  return (
    <select name={name} id={id} className="input-select">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
}

export default InputSelect;
