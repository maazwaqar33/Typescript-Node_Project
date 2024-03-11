/* Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name.*/


//Store the names of a few of your friends in a array called names

let names : string [] = ["Ahsan", "Faizan", "Ubaid"];


//Print each person’s name with personalize message  with the person’s name.
for (let name of names) {
    console.log(`Hello, ${name}! how are you?`);
}