function calculateChaiIngredients(numberOfCups) {
  let water = numberOfCups * 200;
  let milk = numberOfCups * 50;
  let teaLeaves = numberOfCups;
  let sugar = numberOfCups * 2;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:
Water: ${water} ml
Milk: ${milk} ml
Tea Leaves (Majani): ${teaLeaves} tablespoons
Sugar (Sukari): ${sugar} teaspoons

Enjoy your Chai Bora!`);
}

let cups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
calculateChaiIngredients(cups);
