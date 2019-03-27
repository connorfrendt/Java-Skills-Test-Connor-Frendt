const ingredients = require('./ingredients.js');
const inquirer = require('inquirer');

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
          console.log('You have', ingredients.strawberry, 'grams of STRAWBERRIES!');
          console.log('You have', ingredients.banana, 'grams of BANANAS!');
          console.log('You have', ingredients.mango, 'grams of MANGOS!');
          console.log('You have', ingredients.condensedMilk, 'mL of CONDENSED MILK!');
          console.log('You have', ingredients.ice, 'mL of ICE!');
          console.log('You have', ingredients.sugar, 'grams of SUGAR!');
          console.log('\n');
      }

      if(selection === 'Make a Strawberry Smoothie!') {

        if(ingredients.strawberry < 150 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }
        
        else {
          ingredients.strawberry -= 150;
          ingredients.condensedMilk -= 60;
          ingredients.ice -= 90;
          ingredients.sugar -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice, 'mL of ICE left!');
          console.log('You have', ingredients.sugar, 'grams of SUGAR left!');
          console.log('\n');
      
        }
      }

      if(selection === 'Make a Banana Smoothie!') {

        if(ingredients.banana < 180 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.banana -= 180;
          ingredients.condensedMilk -= 60;
          ingredients.ice -= 90;
          ingredients.sugar -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice, 'mL of ICE left!');
          console.log('You have', ingredients.sugar, 'grams of SUGAR left!');
          console.log('\n');
      
        }
      }

      if(selection === 'Make a Mango Smoothie!') {

        if(ingredients.mango < 210 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }
        
        else {
          ingredients.mango -= 210;
          ingredients.condensedMilk -= 60;
          ingredients.ice -= 90;
          ingredients.sugar -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice, 'mL of ICE left!');
          console.log('You have', ingredients.sugar, 'grams of SUGAR left!');
          console.log('\n');
      
        }
      }

      if(selection === 'Make a Strawberry-Banana Smoothie!') {

        if(ingredients.strawberry < 75 || ingredients.banana < 90 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.strawberry -= 75;
          ingredients.banana -= 90;
          ingredients.condensedMilk -= 60;
          ingredients.ice -= 90;
          ingredients.sugar -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice, 'mL of ICE left!');
          console.log('You have', ingredients.sugar, 'grams of SUGAR left!');
          console.log('\n');
        }
      }

      if(selection === 'Make a Strawberry-Mango Smoothie!') {

        if(ingredients.strawberry < 75 || ingredients.mango < 105 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.strawberry -= 75;
          ingredients.mango -= 105;
          ingredients.condensedMilk -= 60;
          ingredients.ice -= 90;
          ingredients.sugar -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice, 'mL of ICE left!');
          console.log('You have', ingredients.sugar, 'grams of SUGAR left!');
          console.log('\n');
        }
      }

      if(selection === 'Make a Banana-Mango Smoothie!') {

        if(ingredients.banana < 90 || ingredients.mango < 105 || ingredients.condensedMilk < 60 || ingredients.ice < 90 || ingredients.sugar < 24) {
          console.log('Sale denied.  Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.banana -= 90;
          ingredients.mango -= 105;
          ingredients.condensedMilk -= 60;
          ingredients.ice -= 90;
          ingredients.sugar -= 24;
      
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('You have', ingredients.strawberry, 'grams of STRAWBERRIES left!');
          console.log('You have', ingredients.banana, 'grams of BANANAS left!');
          console.log('You have', ingredients.mango, 'grams of MANGOS left!');
          console.log('You have', ingredients.condensedMilk, 'mL of CONDENSED MILK left!');
          console.log('You have', ingredients.ice, 'mL of ICE left!');
          console.log('You have', ingredients.sugar, 'grams of SUGAR left!');
          console.log('\n');
        }
      }

  })
  .then(() => {
    return menu();
  })
}

menu();