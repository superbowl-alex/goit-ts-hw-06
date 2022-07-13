const textInput = document.querySelector("#validation-input");
textInput.addEventListener("focus", () => {
  textInput.classList.remove("valid", "invalid");
  textInput.value = "";
});
textInput.addEventListener("blur", () => {
  const isValid = textInput.value.length == textInput.dataset.length;
  const addClass = isValid ? "valid" : "invalid";
  textInput.classList.add(addClass);
});
