function limitWords(text, length) {
  if (!text) return;

  if (text.length <= length) {
    return text;
  }

  const lastSpaceIndex = text.lastIndexOf(" ", length);

  const truncatedText = text.slice(0, lastSpaceIndex);

  const finalText = truncatedText + " Continue Reading...";

  return finalText;
}

export default limitWords;
