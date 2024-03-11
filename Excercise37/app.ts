// Magicians: Make a array of magician’s names. 
let magicians : string[] = ["Harry Houdini", "David Copperfield", "David Blaine", "Uri Geller"]

//Pass the array to a function called show_magicians(), 
function show_magicians(magicians: string[]) {
    for(let magician of magicians){
        console.log(magician)
    }
}

//which prints the name of each magician in the array
show_magicians(magicians)