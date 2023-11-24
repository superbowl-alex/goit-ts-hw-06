let counterValue: number = 0;
const decrementButtonEl: HTMLButtonElement | null = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButtonEl: HTMLButtonElement | null = document.querySelector(
  'button[data-action="increment"]'
);
const valueEl: HTMLSpanElement | null = document.querySelector("#value");

const updateValue = (val: number): void => {
  if(valueEl) (valueEl.innerHTML = val.toString())
};

const decrementValue = (): void => {
  updateValue(--counterValue);
};

const incrementValue = (): void => {
  updateValue(++counterValue);
};

decrementButtonEl?.addEventListener("click", decrementValue);
incrementButtonEl?.addEventListener("click", incrementValue);
