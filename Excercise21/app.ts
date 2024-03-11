/*Alien Colors #1: Imagine an alien was just shot down in a game.  
Write one version of this program that passes the if test and another that fails.
If it is, print a message that the player just earned 5 points.
(The version that fails will have no output.)*/

//Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'
//Write one version of this program that passes
var alienColor : string = "green"

//Write an if statement to test whether the alien’s color is green.
if (alienColor === "green"){
    console.log("The alien's color is", alienColor)
} else{
    console.log("The alien's color is not green. It is", alienColor)
}

//If it is print a message that the player just earned 5 points
if (alienColor === "green"){
    console.log("The player just earned 5 points")
}

//Write one version of this program that fails

var alienColor : string = "green"

//(The version that fails will have no output.)
if (alienColor === "yellow"){
    console.log("The alien's color is", alienColor)
}