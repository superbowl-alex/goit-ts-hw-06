const rangeInput: HTMLInputElement | null = document.querySelector("#font-size-control");
const outputText: HTMLSpanElement | null = document.querySelector("#text");
rangeInput?.addEventListener(
  "input",
  (event) => {
    if(outputText) {
      const inputElement = event.currentTarget as HTMLInputElement;
      (outputText.style.fontSize = `${inputElement.value}px`)
    }
  }
);

