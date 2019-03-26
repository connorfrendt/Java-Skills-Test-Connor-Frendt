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
        
        if(ingredients.strawberry < 150) {
          console.log('Sale denied.  Not enough ingredients to make smoothie');
        }
  
        ingredients.strawberry -= 150;
        console.log('You have ', ingredients, ' in your inventory left!');
      }
    })
    .then(() => {
      return menu();
    })
}

menu();






