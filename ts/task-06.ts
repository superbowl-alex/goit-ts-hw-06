const textInputValid: HTMLInputElement | null = document.querySelector("#validation-input");

textInputValid?.addEventListener("focus", () => {
  textInputValid.classList.remove("valid", "invalid");
  textInputValid.value = "";
});
textInputValid?.addEventListener("blur", () => {
  if(textInputValid.dataset.length !== undefined) {
    const isValid: boolean = textInputValid.value.length === +textInputValid.dataset.length;
    const addClass: string = isValid ? "valid" : "invalid";
    textInputValid.classList.add(addClass);
  }
});
