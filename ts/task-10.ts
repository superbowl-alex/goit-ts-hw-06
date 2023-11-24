interface Refs {
  resultEl: HTMLElement | null;
  inputEl: HTMLInputElement | null;
  btnCreateEl: HTMLButtonElement | null;
  btnDestroyEl: HTMLButtonElement | null;
}

const refs: Refs = {
  resultEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("input"),
  btnCreateEl: document.querySelector("button[data-create]"),
  btnDestroyEl: document.querySelector("button[data-destroy]"),
};

function getCustomRandomHexColor(): string {
  const red: number = Math.round(Math.random() * 255);
  const green: number = Math.round(Math.random() * 255);
  const blue: number = Math.round(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

const createBoxes = (): void => {
  if(refs.inputEl) {
  const amount: number = +refs.inputEl.value;
  for (let i = 0; i < amount; i++) {
    let sizeOfDiv: number = 30;
    sizeOfDiv += i * 10;
    const insertEl: HTMLDivElement | null = document.createElement("div");
    insertEl.style.width = sizeOfDiv + "px";
    insertEl.style.height = sizeOfDiv + "px";
    insertEl.style.backgroundColor = getCustomRandomHexColor();
    refs.resultEl?.append(insertEl);
  }
}
};

const destroyBoxes = (): void => {
  if(refs.resultEl) refs.resultEl.innerHTML = "";
  if(refs.inputEl) refs.inputEl.value = "";
};

refs.btnCreateEl?.addEventListener("click", createBoxes);
refs.btnDestroyEl?.addEventListener("click", destroyBoxes);
