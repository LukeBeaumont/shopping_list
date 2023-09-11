let recipeArray = [];

const addBtn = document.querySelector("#add-btn");
const addRecipeBtn = document.querySelector("#add-ingredient-btn");

addBtn.addEventListener("click", function () {
  showNext();
  addRecipeToList();
});

addRecipeBtn.addEventListener("click", function () {
  alert("yo");
});

function showNext() {
  const itemList = document.querySelector(".item-list");
  itemList.style.display = "block";

  const recipeInput = document.querySelector(".recipe-input");
  recipeInput.style.display = "none";
}

function recipe(name, ingredients) {
  this.name = name;
  this.ingredients = ingredients;
}

function addRecipeToList() {
  let recipeName = document.querySelector("#recipe-name").value;
  let newRecipe = new recipe(recipeName);
  recipeArray.push(newRecipe);
  console.log(recipeArray);
}
