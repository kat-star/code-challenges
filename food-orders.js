// New Cashier Does Not Know About Space or Shift

// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:


function getOrder(input) {

  const foodMap = {
    Burger: 0,
    Fries: 0,
    Chicken: 0,
    Pizza: 0,
    Sandwich: 0,
    Onionrings: 0,
    Milkshake: 0,
    Coke: 0,
  };

  const foodOrder = [];

  let currWord = input[0].toUpperCase();
  for (let i = 1; i <= input.length; i++) {
    if (currWord in foodMap) {
      foodMap[currWord] += 1;
      currWord = i === input.length ? "" : input[i].toUpperCase();
    } else {
      currWord += input[i];
    }
  }

  for (let key in foodMap) {
    for (let i = 0; i < foodMap[key]; i++) {
      foodOrder.push(key);
    }
  }
  return foodOrder.join(" ");
}
