let counterValue = 0;
const decrementButtonEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButtonEl = document.querySelector(
  'button[data-action="increment"]'
);
const valueEl = document.querySelector("#value");
const updateValue = (val) => (valueEl.innerHTML = val);
const decrementValue = () => {
  updateValue(--counterValue);
};
const incrementValue = () => {
  updateValue(++counterValue);
};
decrementButtonEl.addEventListener("click", decrementValue);
incrementButtonEl.addEventListener("click", incrementValue);
