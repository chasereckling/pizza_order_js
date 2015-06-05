function Pizza(toppings) {
  this.pizzaPrice = 0;
  this.toppings = [toppings];
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

Pizza.prototype.addTopping = function() {
    return this.pizzaPrice = this.pizzaPrice + 1;
  }


  $(document).ready(function(){
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedPizzaSize = $("#pizza-size").val();
    var inputtedTopping = $("input:checked").val();

    var newPizza = new Pizza(inputtedTopping);

    if(inputtedPizzaSize === "small"){
      newPizza.smallSizePrice();
    }
    if(inputtedPizzaSize === "medium"){
      newPizza.mediumSizePrice();
    }
    if(inputtedPizzaSize === "large"){
      newPizza.largeSizePrice();
    }

    $("ul#pizzas").append("<li><span class='pizza'>" + "$" + newPizza.pizzaPrice + ".00" + ", " + newPizza.toppings + "</li>")

    $("input#pizza-size").val("");
  });
});
