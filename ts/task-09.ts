function getRandomHexColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl: HTMLElement | null = document.body;
const btnEl: HTMLButtonElement | null = document.querySelector("button");
const spanEl: HTMLSpanElement | null = document.querySelector(".color");

const changeBackgroundColor = (): void => {
  const randomColor: string = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  if(spanEl) spanEl.textContent = randomColor;
};

btnEl?.addEventListener("click", changeBackgroundColor);
