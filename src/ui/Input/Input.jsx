// REACT & LIBRARIES
import { useState } from "react";

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
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPassword ? "text" : type;

  const handleShowPassword = () =>
    setShowPassword((prevPassword) => !prevPassword);

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
    id === "confirmPassword" && ((value) => value === password);

  const validContactNumber = id === "contactNumber" && {
    value: /^09\d{9}$/,
    message: "Should start with 09",
  };

  return (
    <div className="input-container">
      <input
        style={{
          width,
        }}
        type={inputType}
        id={id}
        disabled={disabled}
        className="input"
        value={value || undefined}
        placeholder={placeholder || undefined}
        onChange={onChange}
        autoComplete={autocompleteValue}
        {...register(id, {
          required,
          pattern: validEmail || validContactNumber,
          minLength: validPassword,
          validate: validConfirmPassword,
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
