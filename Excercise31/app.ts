// Animals: Think of at least three different animals that have a common characteristic. 
// and then use a for loop to print out the name of each animal. 
//Modify your program to print a statement about each animal, such as A dog would make a great pet.  
//You could print a sentence such as Any of these animals would make a great pet!

//Store the names of these animals in a list,
let animalsNames : string[] = ["Cat", "Dog", "Parrot"]

//use a for loop to print out the name of each animal.
for (let animalsName of animalsNames){

    // console.log(animalsName) Modify your program to print a statement about each animal,
    console.log(animalsName,"is very beautiful and friendly animal.")
}

//Add a line at the end of your program stating what these animals have in common.
console.log("\nall of these animals would make a great pet")