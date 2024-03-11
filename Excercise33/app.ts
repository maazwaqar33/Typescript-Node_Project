// Large Shirts: Modify the make_shirt() function 
//so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
function make_shirt(size: string = "large", message: string = "I love TypeScript" ) {
    console.log(`\nsize of the shirt: ${size}`)
    console.log(`message printed on shirt: ${message}`)
}
//Call the function.

// Make a large shirtwith the default message,
make_shirt()

//Make a medium shirt with the default message
make_shirt("medium")

//a shirt of any size with a different message.
make_shirt("small", "learning typescript")