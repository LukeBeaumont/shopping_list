let recipeArray = [];
let count = 0;

const addRecipeBtn = document.querySelector("#add-btn");
const addIngredientBtn = document.querySelector("#add-ingredient-btn");
const doneBtn = document.querySelector("#done");

addRecipeBtn.addEventListener("click", function () {
  showNext();
  addRecipeToList();
});

addIngredientBtn.addEventListener("click", function () {
  addIngredient();
  clearInput();
});

doneBtn.addEventListener("click", function () {
  nextRecipe();
  increaseArray();
  displayCards();
});

function addIngredient() {
  let newIngredient = document.querySelector("#items-list").value;
  recipeArray[`${count}`].ingredients.push(newIngredient);
}

function increaseArray() {
  count++;
}

function showNext() {
  const itemList = document.querySelector(".item-list");
  itemList.style.display = "block";

  const recipeInput = document.querySelector(".recipe-input");
  recipeInput.style.display = "none";
}

function nextRecipe() {
  const itemList = document.querySelector(".item-list");
  itemList.style.display = "none";

  const recipeInput = document.querySelector(".recipe-input");
  recipeInput.style.display = "block";
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
  document.querySelector("#recipe-name").value = "";
}

function displayCards() {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";
  for (let i = 0; i < recipeArray.length; i++) {
    let recipe = recipeArray[i];

    let recipeCard = document.createElement("div");

    recipeCard.innerHTML = `<div class ="card"><u>${recipe.name}</u><br>
    ${recipe.ingredients} </div>`;

    cards.appendChild(recipeCard);
  }
}
