// Unchanged Magicians:Because the original array will be unchanged,
//Start with your work from Exercise 40.
// Magicians: Make a array of magician’s names. 
let magicianNames : string[] = ["Harry Houdini", "David Copperfield", "David Blaine", "Uri Geller"]

//Pass the array to a function called show_magicians(), 
function show_magicians(magicians: string[]) {
    for(let magician of magicians){
        console.log(magician)
    }
}

//Write a function called make_great()
//Call the function make_great() with a copy of the array of magicians’ names.  
function make_great(magicians: string[]) {
    let greatMagicians : string[] = magicians.map(magician => `the Great ${magician}`)

    //return the new array and store it in a separate array. 
    return greatMagicians;

}

//modify the array by adding "the Great" to it.
let greatMagiciansNames : string[] = make_great(magicianNames)

////Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//Call show_magicians() to see actual list
console.log("Original List")
show_magicians(magicianNames)

//modified array with great on it
console.log("\nGreat magician Names")
show_magicians(greatMagiciansNames)


