const ingredients = require('./ingredients.js');
const inquirer = require('inquirer');
const money = require('./money.js');

const menu = () => {

  inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: '\n\n What would you like to do? \n',
      choices: [
      {
        name: 'Check Inventory'
      },
      {
        name: 'Restock Inventory'
      },
      {
        name: 'Make a Strawberry Smoothie!'
      },
      {
        name: 'Make a Banana Smoothie!'
      },
      {
        name: 'Make a Mango Smoothie!'
      },
      {
        name: 'Make a Strawberry-Banana Smoothie!'
      },
      {
        name: 'Make a Strawberry-Mango Smoothie!'
      },
      {
        name: 'Make a Banana-Mango Smoothie!'
      }
    ]
    }
  ])
    .then(({ selection }) => {

      if(selection === 'Check Inventory') {
        console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry.count, 'grams of STRAWBERRIES!');
          console.log('You have', ingredients.banana.count, 'grams of BANANAS!');
          console.log('You have', ingredients.mango.count, 'grams of MANGOS!');
          console.log('You have', ingredients.condensedMilk.count, 'mL of CONDENSED MILK!');
          console.log('You have', ingredients.ice.count, 'mL of ICE!');
          console.log('You have', ingredients.sugar.count, 'grams of SUGAR!');
          console.log('\n');
      }

      if(selection === 'Restock Inventory') {
        ingredients.strawberry.count += 250;
        // ingredients.banana
        console.log('You have', ingredients.strawberry.count, 'grams of STRAWBERRIES!');
        console.log('You have $', money.totalMoney, 'left to use!');
      }

      if(selection === 'Make a Strawberry Smoothie!') {

        if(ingredients.strawberry.count < 150 || ingredients.condensedMilk.count < 60 || ingredients.ice.count < 90 || ingredients.sugar.count < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }
        
        else {
          ingredients.strawberry.count -= 150;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry.count, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana.count, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango.count, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk.count, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice.count, 'mL of ICE left!');
          console.log('You have', ingredients.sugar.count, 'grams of SUGAR left!');
          console.log('\n');
      
        }
      }

      if(selection === 'Make a Banana Smoothie!') {

        if(ingredients.banana.count < 180 || ingredients.condensedMilk.count < 60 || ingredients.ice.count < 90 || ingredients.sugar.count < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.banana.count -= 180;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry.count, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana.count, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango.count, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk.count, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice.count, 'mL of ICE left!');
          console.log('You have', ingredients.sugar.count, 'grams of SUGAR left!');
          console.log('\n');
      
        }
      }

      if(selection === 'Make a Mango Smoothie!') {

        if(ingredients.mango.count < 210 || ingredients.condensedMilk.count < 60 || ingredients.ice.count < 90 || ingredients.sugar.count < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }
        
        else {
          ingredients.mango.count -= 210;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry.count, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana.count, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango.count, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk.count, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice.count, 'mL of ICE left!');
          console.log('You have', ingredients.sugar.count, 'grams of SUGAR left!');
          console.log('\n');
      
        }
      }

      if(selection === 'Make a Strawberry-Banana Smoothie!') {

        if(ingredients.strawberry.count < 75 || ingredients.banana.count < 90 || ingredients.condensedMilk.count < 60 || ingredients.ice.count < 90 || ingredients.sugar.count < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.strawberry.count -= 75;
          ingredients.banana.count -= 90;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry.count, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana.count, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango.count, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk.count, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice.count, 'mL of ICE left!');
          console.log('You have', ingredients.sugar.count, 'grams of SUGAR left!');
          console.log('\n');
        }
      }

      if(selection === 'Make a Strawberry-Mango Smoothie!') {

        if(ingredients.strawberry.count < 75 || ingredients.mango.count < 105 || ingredients.condensedMilk.count < 60 || ingredients.ice.count < 90 || ingredients.sugar.count < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.strawberry.count -= 75;
          ingredients.mango.count -= 105;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry.count, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana.count, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango.count, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk.count, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice.count, 'mL of ICE left!');
          console.log('You have', ingredients.sugar.count, 'grams of SUGAR left!');
          console.log('\n');
        }
      }

      if(selection === 'Make a Banana-Mango Smoothie!') {

        if(ingredients.banana.count < 90 || ingredients.mango.count < 105 || ingredients.condensedMilk.count < 60 || ingredients.ice.count < 90 || ingredients.sugar.count < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.banana.count -= 90;
          ingredients.mango.count -= 105;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry.count, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana.count, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango.count, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk.count, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice.count, 'mL of ICE left!');
          console.log('You have', ingredients.sugar.count, 'grams of SUGAR left!');
          console.log('\n');
        }
      }

  })
  .then(() => {
    return menu();
  })
}

menu();