// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//Make a array of your three favorite fruits and call it favorite_fruits.

//Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

//Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits : Array <String> = ["Mangos", "Bananas", "Oranges"]

if (favorite_fruits.includes("apples")){
    console.log("You really like bananas")
}

if (favorite_fruits.includes("Mangos")){
    console.log("\nYou really like Mangos")
}

if (favorite_fruits.includes("grapes")){
    console.log("You really like Grapes")
}

if (favorite_fruits.includes("Bananas")){
    console.log("\nYou really like Bananas")
}

if (favorite_fruits.includes("Oranges")){
    console.log("\nYou really like Oranges")
}