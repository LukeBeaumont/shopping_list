let recipeArray = [];

const addBtn = document.querySelector("#add-btn");
const addRecipeBtn = document.querySelector("#add-ingredient-btn");

addBtn.addEventListener("click", function () {
  showNext();
  addRecipeToList();
});

addRecipeBtn.addEventListener("click", function () {
  let newIngredient = document.querySelector("#items-list").value;
  recipeArray[0].ingredients.push(newIngredient);
  clearInput();
});

function showNext() {
  const itemList = document.querySelector(".item-list");
  itemList.style.display = "block";

  const recipeInput = document.querySelector(".recipe-input");
  recipeInput.style.display = "none";
}

function recipe(name) {
  this.name = name;
  this.ingredients = [];
}

function addRecipeToList() {
  let recipeName = document.querySelector("#recipe-name").value;
  let newRecipe = new recipe(recipeName);
  recipeArray.push(newRecipe);
  console.log(recipeArray);
}

function clearInput() {
  document.querySelector("#items-list").value = "";
}
