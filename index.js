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
        name: 'Daily Sales Report'
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

        if(money.totalMoney < 1.80) {
          console.log('** RESTOCK FAILED **', '\n',  'Insufficient funds.');
        }

        else {
          ingredients.strawberry.count += 150;
          ingredients.banana.count += 180;
          ingredients.mango.count += 210;
          ingredients.condensedMilk.count += 60;
          ingredients.ice.count += 90;
          ingredients.sugar.count += 24;
  
          money.totalMoney -= 1.8;
          money.totalCost -= 1.8;
  
          console.log('\n', '>>> You have $', money.totalMoney.toFixed(2), 'left to use! <<<', '\n');
          console.log('You have', ingredients.strawberry.count, 'grams of STRAWBERRIES!');
          console.log('You have', ingredients.banana.count, 'grams of BANANAS!');
          console.log('You have', ingredients.mango.count, 'grams of MANGOS!');
          console.log('You have', ingredients.condensedMilk.count, 'mL of CONDENSED MILK!');
          console.log('You have', ingredients.ice.count, 'mL of ICE!');
          console.log('You have', ingredients.sugar.count, 'grams of SUGAR!');
          console.log('\n');
        }
      }

      if(selection === 'Daily Sales Report') {

        console.log('TOTAL REVENUE: ', money.totalRevenue.toFixed(2));
        console.log('TOTAL COST: ', money.totalCost.toFixed(2));

        if(money.totalRevenue > Math.abs(money.totalCost)) {

          var totalProfit = money.totalRevenue - Math.abs(money.totalCost);
          console.log('TOTAL PROFIT: ', totalProfit.toFixed(2));
          console.log('You have made $', totalProfit.toFixed(2), 'in profit today')
        }

        else if(money.totalRevenue < Math.abs(money.totalCost)) {
          var totalProfit = Math.abs(money.totalCost) - money.totalRevenue;
          console.log('TOTAL PROFIT: ', totalProfit.toFixed(2) * -1);
          console.log('You have costed yourself $', totalProfit.toFixed(2));
        }
        
        else {
          console.log('TOTAL PROFIT: ', (money.totalRevenue - Math.abs(money.totalCost)).toFixed(2));
          console.log('You have not made any revenue, nor had any costs, therefore you do not have a profit for today.');
        }
      }

      if(selection === 'Make a Strawberry Smoothie!') {

        if(ingredients.strawberry.count < 150 || ingredients.condensedMilk.count < 60 || ingredients.ice.count < 90 || ingredients.sugar.count < 24) {
          console.log('** SALE DENIED **', '\n', 'Not enough ingredients to make smoothie.');
        }
        
        else {
          ingredients.strawberry.count -= 150;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          money.totalMoney += 3;
          money.totalRevenue += 3;
          
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('\n', '>>> You now have $', money.totalMoney.toFixed(2), '<<<', '\n');
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
          console.log('** SALE DENIED **', '\n', 'Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.banana.count -= 180;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          money.totalMoney += 3;
          money.totalRevenue += 3;

          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('\n', '>>> You now have $', money.totalMoney.toFixed(2), '<<<', '\n');
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
          console.log('** SALE DENIED **', '\n', 'Not enough ingredients to make smoothie.');
        }
        
        else {
          ingredients.mango.count -= 210;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          money.totalMoney += 3;
          money.totalRevenue += 3;

          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('\n', '>>> You now have $', money.totalMoney.toFixed(2), '<<<', '\n');
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
          console.log('** SALE DENIED **', '\n', 'Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.strawberry.count -= 75;
          ingredients.banana.count -= 90;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          money.totalMoney += 3;
          money.totalRevenue += 3;

          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('\n', '>>> You now have $', money.totalMoney.toFixed(2), '<<<', '\n');
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
          console.log('** SALE DENIED **', '\n', 'Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.strawberry.count -= 75;
          ingredients.mango.count -= 105;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          money.totalMoney += 3;
          money.totalRevenue += 3;
          
          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('\n', '>>> You now have $', money.totalMoney.toFixed(2), '<<<', '\n');
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
          console.log('** SALE DENIED **', '\n', 'Not enough ingredients to make smoothie.');
        }

        else {
          ingredients.banana.count -= 90;
          ingredients.mango.count -= 105;
          ingredients.condensedMilk.count -= 60;
          ingredients.ice.count -= 90;
          ingredients.sugar.count -= 24;
      
          money.totalMoney += 3;
          money.totalRevenue += 3;

          console.log('\n');
          console.log('*_*_*_*_*_* INVENTORY *_*_*_*_*_*', '\n');
          console.log('\n', '>>> You now have $', money.totalMoney.toFixed(2), '<<<', '\n');
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