const categories: NodeListOf<HTMLElement> = document.querySelectorAll("li.item");
const amountCategories: number = categories.length;
console.log(`Number of categories: ${amountCategories}`);
for (const category of Array.from(categories)) {
  const titleOfCategory: string = category.querySelector("h2")?.textContent || '';
  const amountSubCategories: number = category.querySelectorAll("li").length;
  console.log("Category: ", titleOfCategory);
  console.log("Elements: ", amountSubCategories);
}
