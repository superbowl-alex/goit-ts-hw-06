const ingredients: string[] = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl: HTMLElement | null = document.querySelector("#ingredients");
const arrayOfItem: HTMLLIElement[] = ingredients.map((ingredient: string) => {
  const itemEl: HTMLLIElement = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  return itemEl;
});
if (listEl) {
  listEl.append(...arrayOfItem);
}
