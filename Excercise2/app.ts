//Store a person’s name in a variable
var personName : string = "Ahsan siddiquie";

//print that person’s name in lowercase.
console.log(personName.toLowerCase())
console.log(personName.toUpperCase())
console.log(personName.toLowerCase().replace(/\b\w/g, pN => pN.toUpperCase()))