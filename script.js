const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function () {
  showNext();
  createRecipe();
});

function showNext() {
  const itemList = document.querySelector(".item-list");
  itemList.style.display = "block";

  const recipeInput = document.querySelector(".recipe-input");
  recipeInput.style.display = "none";
}

function createRecipe() {
  let recipeName = document.querySelector("#recipe-name").value;
  console.log(recipeName);
}
