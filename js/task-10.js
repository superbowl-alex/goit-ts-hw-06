const refs = {
  resultEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("input"),
  btnCreateEl: document.querySelector("button[data-create]"),
  btnDestroyEl: document.querySelector("button[data-destroy]"),
};

function getRandomHexColor() {
  const red = Math.round(Math.random(0, 1) * 255);
  const green = Math.round(Math.random(0, 1) * 255);
  const blue = Math.round(Math.random(0, 1) * 255);
  return `rgb(${red},${green},${blue})`;
}

const createBoxes = (amount) => {
  amount = refs.inputEl.value;
  for (let i = 0; i < amount; i++) {
    let sizeOfDiv = 30;
    sizeOfDiv += i * 10;
    const insertEl = document.createElement("div");
    insertEl.style.width = sizeOfDiv + "px";
    insertEl.style.height = sizeOfDiv + "px";
    insertEl.style.backgroundColor = getRandomHexColor();
    refs.resultEl.append(insertEl);
  }
};
const destroyBoxes = () => {
  refs.resultEl.innerHTML = "";
  refs.inputEl.value = "";
};
refs.btnCreateEl.addEventListener("click", createBoxes);
refs.btnDestroyEl.addEventListener("click", destroyBoxes);
