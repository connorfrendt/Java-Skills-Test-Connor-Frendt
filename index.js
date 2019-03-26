const ingredients = require('./ingredients.js');
const inquirer = require('inquirer');

const menu = () => {

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
      if(selection === 'Strawberry') {
        
        if(ingredients.strawberry < 150 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie');
        } else {
          ingredients.strawberry -= 150;
          ingredients.condensedMilk -= 60;
          ingredients.ice -= 90;
          ingredients.sugar -= 24;

          console.log('\n');
          console.log('***INVENTORY***')
          console.log('You have ', ingredients.strawberry, ' STRAWBERRIES left!');
          console.log('You have ', ingredients.condensedMilk, 'mL of CONDENSED MILK left!');
          console.log('You have ', ingredients.ice, 'mL of ICE left!');
          console.log('You have ', ingredients.sugar, 'grams of SUGAR left!');
          
        }
  
      }

      if(selection === 'Banana') {
        if(ingredients.banana < 180)
      }
    })
    .then(() => {
      return menu();
    })
}

menu();