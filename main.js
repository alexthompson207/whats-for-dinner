var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"];

var mainDishes = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"];

  var desserts = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
  ];

//DOM VARIABLES
var cookButton = document.querySelector('.cook-button');
var displayDish = document.querySelector('.display-result');
var addRecipeBtn = document.querySelector('.add-recipe');
var addNewRecipeBtn = document.querySelector('.add-new');
var newRecipeType = document.getElementById('recipe-type');
var newRecipeName = document.getElementById('recipe-name');
//EVENT LISTENERS
cookButton.addEventListener('click', displayRandomDish);
addRecipeBtn.addEventListener('click', displayForm);
addNewRecipeBtn.addEventListener('click', showNewRecipe);

function changeDisplay() {
  document.querySelector('.cookpot-box').classList.add('hidden');
  document.querySelector('.results').classList.remove('hidden');
}

function displayRandomDish() {
  if(document.getElementById('side').checked === true) {
    displayDish.innerText = `${sides[getRandomIndex(sides)]}!`;
    changeDisplay();
  } else if(document.getElementById('main-dish').checked === true) {
    displayDish.innerText = `${mainDishes[getRandomIndex(mainDishes)]}!`;
    changeDisplay();
  } else if(document.getElementById('dessert').checked === true) {
      displayDish.innerText = `${desserts[getRandomIndex(desserts)]}!`;
      changeDisplay();
  } else if(document.getElementById('entire-meal').checked === true) {
      displayDish.innerText = `${mainDishes[getRandomIndex(mainDishes)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`;
      changeDisplay();
  }
}

function displayForm() {
  document.querySelector('.input-recipe').classList.remove('hidden');
}

function showNewRecipe() {
  event.preventDefault();
  addNewRecipe();
  changeDisplay();
}

function addNewRecipe() {

  if(newRecipeType.value.toLowerCase() === "side") {
    sides.push(newRecipeName.value);
    displayDish.innerText = `${newRecipeName.value}!`;
  } else if (newRecipeType.value.toLowerCase() === "main dish") {
    mainDishes.push(newRecipeName.value);
    displayDish.innerText = `${newRecipeName.value}!`;
  } else if (newRecipeType.value.toLowerCase() === "dessert") {
    desserts.push(newRecipeName.value);
    displayDish.innerText = `${newRecipeName.value}!`;
  } else {
    displayError();
  }
}

function displayError() {
  displayDish.innerText = `${newRecipeType.value} is not a valid recipe type!`;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }
