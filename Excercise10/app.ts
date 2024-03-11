/* Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.”*/

//favorite mode of transportation
let transportaions : string [] = ["Suzuki car", " Honda motorcycle"]

//make a list that stores several examples
let examples : string [] = ["own", "buy", "drive"]

// print a series of statements about these items
for (let transportaion of transportaions){
    for (let example of examples){
        console.log(`I want to ${example} a${transportaion}`)
    }
}