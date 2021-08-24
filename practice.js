const pizzaToppings = ["Pepperoni", "Sausage", "Chicken", "Bacon"];
const pizzaCount = ["One", "Two", "Three"]
const pizzaCrust = ["Thick", "Thin"];
const pizzaSize = ["Large", "Medium"];
const orderText = "pizza ready shorty.";

let greetCustomer = "Welcome to Pizza House our toppings are: ";
for (let i = 0; i < pizzaToppings.length; i++) {
  greetCustomer += pizzaToppings[i] + "<br>";
}

document.getElementById("demo").innerHTML = greetCustomer;

let orderFood = pizzaCount[0] + " " + pizzaCrust[0] + " " + pizzaToppings[0] + " " + orderText;

document.getElementById("demotwo").innerHTML = orderFood;
</script>
