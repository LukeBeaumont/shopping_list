const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function () {
  showNext();
  createRecipe();
});

function showNext() {
  const itemList = document.querySelector(".item-list");
  itemList.style.display = "block";
}

function createRecipe() {
  //do stuff
}
