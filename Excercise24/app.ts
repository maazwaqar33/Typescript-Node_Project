// Stages of Life: Write an if-else chain that determines a person’s stage of life.
//Set a value for the variable age, and then:
var age : number = 30;

//If the person is less than 2 years old, 
if (age < 2){
    console.log("The person is a baby")//print a message that the person is a baby.
} 

// If the person is at least 2 years old but less than 4,
else if (age >=2 && age <4){
    console.log("The person is a toddler") // print a message that the person is a toddler.
}

// If the person is at least 4 years old but less than 13, 
else if (age >=4 && age <13){
    console.log("The person is a kid")//print a message that the person is a kid.
}

// If the person is at least 13 years old but less than 20,
else if(age >= 13 && age <20){
    console.log("The person is a teenager")//print a message that the person is a teenager.
}

// If the person is at least 20 years old but less than 65.
else if (age >=20 && age <65){
    console.log("The person is an adult")//print a message that the person is an adult.
}

// If the person is age 65 or older.
else{
    console.log("The person is an elder")//print a message that the person is an elder.
}