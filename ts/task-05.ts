const textInput: HTMLInputElement | null = document.querySelector("#name-input");
const output: HTMLSpanElement | null = document.querySelector("#name-output");
textInput?.addEventListener("input", (event) => {
  if(output) {
    const inputElement = event.currentTarget as HTMLInputElement;
    output.textContent = inputElement.value
    ? inputElement.value
    : "Anonymous";
  }
});
