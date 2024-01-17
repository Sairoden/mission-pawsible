// STYLES
import "./InputFile.scss";

function InputFile({ id, register, defaultValue, accept }) {
  return (
    <input
      type="file"
      className="file-input"
      id={id}
      {...register(id)}
      defaultValue={defaultValue || undefined}
      accept={accept}
    />
  );
}

export default InputFile;
