// Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

//Make a array of five or more usernames, including the name 'admin'.
 let userNames : string[] = ["Atif", "Ahsan", "Ubaid", "Admin", "Sameer"]

 //Loop through the array, and print a greeting to each user:
 for (let userName of userNames){
    if (userName === "Admin") {
        console.log("\nHello admin, would you like to see a status report?")
    }
    else{
        console.log(userName,"thank you for logging in again")
    }
 }