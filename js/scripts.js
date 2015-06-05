function Pizza(toppings) {
  this.pizzaPrice = 0;
  this.toppings = toppings;
}

Pizza.prototype.smallSizePrice = function() {
  return this.pizzaPrice = this.pizzaPrice + 10;
}

Pizza.prototype.mediumSizePrice = function() {
  return this.pizzaPrice = this.pizzaPrice + 15;
}

Pizza.prototype.largeSizePrice = function() {
  return this.pizzaPrice = this.pizzaPrice + 20;
}

// Pizza.prototype.addTopping = function() {
//   this.smallSizePrice =
// }
