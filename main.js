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
//EVENT LISTENERS
cookButton.addEventListener('click', displayRandomDish);

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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }
