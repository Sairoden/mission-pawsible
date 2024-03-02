// REACT & LIBRARIES
import { useEffect, useState } from "react";

// STYLES
import "./Input.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input({
  id,
  disabled = false,
  value,
  placeholder,
  onChange,
  width,
  type = "text",
  register,
  required = false,
  password,
  defaultValue,
  size,
  max,
  location,
  setValue,
  getValues,
  setBlurLocation,
  setLocation,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : type;

  const handleShowPassword = () =>
    setShowPassword(prevPassword => !prevPassword);

  const autocompleteValue =
    type === "password" ? "new-password" : type === "email" ? "username" : "on";

  const validEmail = type === "email" && {
    value: /\S+@\S+\.\S+/,
    message: "Please provide a valid email",
  };

  const validPassword = type === "password" && {
    value: 8,
    message: "Password needs to be at least 8 characters",
  };

  const validConfirmPassword =
    id === "confirmPassword" && (value => value === password);

  const validContactNumber = id === "contactNumber" && {
    value: /^09\d{9}$/,
    message: "Should start with 09",
  };

  useEffect(() => {
    if (location) {
      setValue("location", location);
    }
  }, [location, setValue]);

  return (
    <div className="input-container">
      <input
        max={max}
        style={{
          width,
        }}
        defaultValue={defaultValue || undefined}
        type={inputType}
        id={id}
        disabled={disabled}
        className={`input-textbox input-${size}`}
        value={value || undefined}
        onChange={onChange}
        placeholder={placeholder || undefined}
        autoComplete={autocompleteValue}
        {...register(id, {
          required,
          pattern: validEmail || validContactNumber,
          minLength: validPassword,
          validate: validConfirmPassword,
          onBlur: e => {
            if (id === "location") {
              const myLocation = e.target.value;
              if (myLocation) {
                setBlurLocation(myLocation);
                setLocation("");
              }
            }
          },
        })}
      />
      {type === "password" && (
        <>
          {showPassword ? (
            <FaEyeSlash
              className="password-icon"
              onClick={handleShowPassword}
            />
          ) : (
            <FaEye className="password-icon" onClick={handleShowPassword} />
          )}
        </>
      )}
    </div>
  );
}

export default Input;
