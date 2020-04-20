// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define 
//this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
const restaurant = {
  name: "Bob's Burgers",
  // Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. 
  placeOrder: function (meal) {
    this.orders.push(meal);
  },
  // The object should have a property named orders that is an array. You will need to define this.
  orders: []
}

const chickenComboMeal = {
  sandwichType: "chicken sandwich",
  fries: true,
  drinkSize: "large"
}

const cheeseBurgerComboMeal = {
  sandwichType: "cheeseburger",
  fries: true,
  drinkSize: "medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(cheeseBurgerComboMeal);

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
console.table(restaurant.orders);