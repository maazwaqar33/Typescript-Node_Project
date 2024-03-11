/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
If the alien’s color isn’t green, print a statement that the player just earned 10 points.
Write one version of this program that runs the if block and another that runs the else block.*/

//Choose a color for an alien as you did in Exercise 25'
var alienColor : string = "Red"

//Write one version of this program that runs the else block.
if (alienColor === "green")// If the alien’s color is green,
{
    console.log("\nThe alien's color is", alienColor)
//print a statement that the player just earned 5 points for shooting the alien.
    console.log("The player just earned 5 points for shooting the alien")
} 

else{
    console.log("\nThe alien's color is not green. It is", alienColor) // If the alien’s color isn’t green,
// print a statement that the player just earned 10 points
    console.log("The player just earned 10 points")
}

//Write one version of this program that runs the if block
var alien_Color : string = "green"


if (alien_Color === "green")//If the alien’s color isn’t green,
{
    console.log("\nThe alien's color is", alien_Color)
    console.log("The player just earned 5 points")
} 

else{
    console.log("\nThe alien's color is not green. It is", alien_Color)
    //  print a statement that the player just earned 10 points
    console.log("The player just earned 10 points")
}