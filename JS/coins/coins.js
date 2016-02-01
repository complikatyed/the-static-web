/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

// function coinCounter () {
//   // Initialize a JavaScript object to hold the coins
//   var coinPurse = {};

//   coinPurse.quarters = 0;

//   return coinPurse;
// }

// var coins = coinCounter()
// console.log();

var amount = 2.74;
var quarters = 0;
var dimes = 0;
var nickels = 0;
var pennies = 0;


amount *= 100;
while (amount >= 25) {
  quarters += 1;
  amount -= 25;
} while (amount >= 10) {
  dimes += 1;
  amount -= 10;
} while (amount >= 5) {
  nickels += 1;
  amount -= 5;
} while (amount >= 1) {
  pennies += 1;
  amount -= 1;
}

console.log("quarters:", quarters);
console.log("dimes:", dimes);
console.log("nickels:", nickels);
console.log("pennies:", pennies);