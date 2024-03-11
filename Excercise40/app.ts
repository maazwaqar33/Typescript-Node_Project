// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 

//Write a function that accepts a array of items a person wants on a sandwich.
function makeSandwiches(items:string[]) {
   //print Summary of item
   console.log("Heres your sandwich with requested items")
   items.forEach(item => console.log("-" + item));
   console.log(); // Add an empty line for better readability
}

//Call the function three times, using a different number of arguments each time.
makeSandwiches(["Ham", "Cheese", "Lettuce"]) // Call with 3 items
makeSandwiches(["Turkey", "Avocado"]) // Call with 2 items
makeSandwiches(["Peanut Butter"]) // Call with 1 items

