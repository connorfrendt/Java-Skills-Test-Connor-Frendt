const ingredients = require('./ingredients.js');

ingredients.strawberry -= 150;
console.log(ingredients);
if(/* strawberry smoothie */) {
  ingredients.strawberry -= 150;
  ingredients.condensedMilk -= 60;
  ingredients.ice -= 90;
  ingredients.sugar -= 24;
  if(ingredients.strawberry < 150 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
    return 'Sale denied. Not enough ingredients to make smoothie';
  }
}

