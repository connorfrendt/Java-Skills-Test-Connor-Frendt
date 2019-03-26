const ingredients = require('./ingredients.js');
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'list',
    name: 'selection',
    message: 'What kind of smoothie would you like? (Strawberry, Banana, Mango)',
    choices: [{
      name: 'Strawberry'
    },
    {
      name: 'Banana'
    },
    {
      name: 'Mango'
    }]
  }
])
  .then(({ selection }) => {
    if(selection === 'Banana') {
      console.log('You ordered bananas!');
    }
  })

// ingredients.strawberry -= 150;
// console.log(ingredients);
// if(/* strawberry smoothie */) {
//   ingredients.strawberry -= 150;
//   ingredients.condensedMilk -= 60;
//   ingredients.ice -= 90;
//   ingredients.sugar -= 24;
//   if(ingredients.strawberry < 150 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
//     return 'Sale denied. Not enough ingredients to make smoothie';
//   }
// }

// if(/* banana smoothie */) {
//   ingredients.banana -= 180;
//   ingredients.condensedMilk -= 60;
//   ingredients.ice -= 90;
//   ingredients.sugar -= 24;

//   if(ingredients.banana < 180 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
//     return 'Sale denied.  Not enough ingredients to make smoothie';
//   }
// }

// if(/* mango smoothie */) {
//   ingredients.mango -= 210;
//   ingredients.condensedMilk -= 60;
//   ingredients.ice -= 90;
//   ingredients.sugar -= 24;

//   if(ingredients.mango < 210 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
//     return 'Sale denied.  Not enough ingredients to make smoothie';
//   }
// }