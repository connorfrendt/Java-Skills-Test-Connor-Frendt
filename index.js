const ingredients = require('./ingredients.js');
const inquirer = require('inquirer');

const menu = () => {

  inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: '\n\n What kind of smoothie would you like? \n',
      choices: [
      {
        name: 'Check Inventory'
      }
      // {
      //   name: 'Strawberry'
      // },
      // {
      //   name: 'Banana'
      // },
      // {
      //   name: 'Mango'
      // }
    ]
    }
  ])
    .then(({ selection }) => {

      if(selection === 'Check Inventory') {
        console.log('\n');
          console.log('*** INVENTORY ***');
          console.log('You have ', ingredients.strawberry, 'grams of STRAWBERRIES left!');
          console.log('You have ', ingredients.banana, 'grams of BANANAS left!');
          console.log('You have ', ingredients.mango, 'grams of MANGOS left!');
          console.log('You have ', ingredients.condensedMilk, 'mL of CONDENSED MILK left!');
          console.log('You have ', ingredients.ice, 'mL of ICE left!');
          console.log('You have ', ingredients.sugar, 'grams of SUGAR left!');
          console.log('\n');
      }


      // if(selection === 'Strawberry') {
        
      //   if(ingredients.strawberry < 150 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
      //     console.log('Sale denied.  Not enough ingredients to make smoothie');
      //   }
        
      //   else {
      //     ingredients.strawberry -= 150;
      //     ingredients.condensedMilk -= 60;
      //     ingredients.ice -= 90;
      //     ingredients.sugar -= 24;

      //     console.log('\n');
      //     console.log('*** INVENTORY ***');
      //     console.log('You have ', ingredients.strawberry, 'grams of STRAWBERRIES left!');
      //     console.log('You have ', ingredients.banana, 'grams of BANANAS left!');
      //     console.log('You have ', ingredients.mango, 'grams of MANGOS left!');
      //     console.log('You have ', ingredients.condensedMilk, 'mL of CONDENSED MILK left!');
      //     console.log('You have ', ingredients.ice, 'mL of ICE left!');
      //     console.log('You have ', ingredients.sugar, 'grams of SUGAR left!');
      //     console.log('\n');

      //   }
      // }

      // if(selection === 'Banana') {

      //   if(ingredients.banana < 180 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
      //     console.log('Sale denied.  Not enough ingredients to make smoothie');
      //   }
        
      //   else {
      //     ingredients.banana -= 180;
      //     ingredients.condensedMilk -= 60;
      //     ingredients.ice -= 90;
      //     ingredients.sugar -= 24;

      //     console.log('\n');
      //     console.log('*** INVENTORY ***');
      //     console.log('You have ', ingredients.strawberry, ' STRAWBERRIES left!');
      //     console.log('You have ', ingredients.banana, ' BANANAS left!');
      //     console.log('You have ', ingredients.mango, ' MANGOS left!');
      //     console.log('You have ', ingredients.condensedMilk, 'mL of CONDENSED MILK left!');
      //     console.log('You have ', ingredients.ice, 'mL of ICE left!');
      //     console.log('You have ', ingredients.sugar, 'grams of SUGAR left!');
      //     console.log('\n');

      //   }
      // }

      // if(selection === 'Mango') {
      //   if(ingredients.mango < 180 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
      //     console.log('Sale denied.  Not enough ingredients to make smoothie');
      //   } else {
      //     ingredients.mango -= 180;
      //     ingredients.condensedMilk -= 60;
      //     ingredients.ice -= 90;
      //     ingredients.sugar -= 24;

      //     console.log('\n');
      //     console.log('*** INVENTORY ***');
      //     console.log('You have ', ingredients.strawberry, ' STRAWBERRIES left!');
      //     console.log('You have ', ingredients.banana, ' BANANAS left!');
      //     console.log('You have ', ingredients.mango, ' MANGOS left!');
      //     console.log('You have ', ingredients.condensedMilk, 'mL of CONDENSED MILK left!');
      //     console.log('You have ', ingredients.ice, 'mL of ICE left!');
      //     console.log('You have ', ingredients.sugar, 'grams of SUGAR left!');
      //     console.log('\n');

      //   }
      // }

    })
    .then(() => {
      return menu();
    })
}

menu();