/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Start with your program from Exercise 16.
.*/
//Start with your program from Exercise 16. 
let guests : string [] = ["Ahsan","Faizan","ubaid"]

//Add one new guest to the beginning of your array.
guests.unshift("Sameer")

//Add one new guest to the middle of your array.
guests.splice(2, 0, "Atif")

//Use append() to add one new guest to the end of your list.
guests.push("Junaid")

//Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("\nI can invite only two people for dinner.")

//Remove guests from your list one at a time until only two names remain in your list.
//Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while(guests.length > 2){
    let remove = guests.pop();
    console.log(`\nsorry,${remove} i can’t invite you to dinner`)
}
//Print a message to each of the two people still on your list, 
//letting them know they’re still invited.
for (let guest of guests) {
    console.log(`\nHey, ${guest}! your are still invited`)
}

//Remove the last two names from your list, so you have an empty list.
while(guests.length > 0){
    let remove = guests.pop();
}

//Print your list to make sure you actually have an empty list at the end of your program.
console.log("\nEmpty list:")