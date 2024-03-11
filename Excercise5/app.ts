/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces.*/

//Store a person’s name, and include some whitespace characters at the beginning and end of the name.
let person_Name: string = "\t Faizan Khan \n"

//Print the name once, so the whitespace around the name is displayed.
console.log(`${person_Name}`)

//Then print the name after striping the white spaces
console.log(person_Name.trim())

