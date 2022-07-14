const rangeInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");
rangeInput.addEventListener(
  "input",
  (event) => (output.style.fontSize = `${event.currentTarget.value}px`)
);
