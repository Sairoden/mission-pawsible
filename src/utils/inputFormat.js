const inputFormat = input => {
  let words = input.trim().split(" ");
  let capitalizedInput = words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
  return capitalizedInput;
};

export default inputFormat;
