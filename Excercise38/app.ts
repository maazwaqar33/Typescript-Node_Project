//Start with a copy of your program from Exercise 39. 
// Magicians: Make a array of magician’s names. 
let magicianNames : string[] = ["Harry Houdini", "David Copperfield", "David Blaine", "Uri Geller"]

//Pass the array to a function called show_magicians(), 
function show_magicians(magicians: string[]) {
    for(let magician of magicians){
        console.log(magician)
    }
}

//Write a function called make_great()  
function make_great(magicians: string[]) {
    //modifies the array of magicians by adding the phrase the Great to each magician’s name.
    let greatMagicians : string[] = magicians.map(magician => `the Great ${magician}`)
    return greatMagicians;
}


//modify the array by adding "the Great" to it.
let greatMagiciansNames : string[] = make_great(magicianNames)

//Call show_magicians() to see that the list has actually been modified.
console.log("Original List")
show_magicians(magicianNames)


//modify each magician's name in the array by adding "the Great" to it.
console.log("\nGreat magician Names")
show_magicians(greatMagiciansNames)




