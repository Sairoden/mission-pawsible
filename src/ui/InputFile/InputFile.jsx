// STYLES
import "./InputFile.scss";

function InputFile({
  id,
  register,
  defaultValue,
  accept,
  disabled = false,
  required = false,
  multiple = false,
}) {
  return (
    <input
      type="file"
      className="file-input"
      id={id}
      {...register(id, {
        required,
      })}
      defaultValue={defaultValue || undefined}
      accept={accept}
      disabled={disabled}
      required={required}
      multiple={multiple}
    />
  );
}

export default InputFile;
