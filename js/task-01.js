const categories = document.querySelectorAll("li.item");
const amountCategories = categories.length;
console.log(`Number of categories: ${amountCategories}`);
for (const category of categories) {
  const titleOfCategory = category.querySelector("h2").textContent;
  const amountSubCategories = category.querySelectorAll("li").length;
  console.log("Category: ", titleOfCategory);
  console.log("Elements: ", amountSubCategories);
}
