// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.

//Make a array of five or more usernames, including the name 'admin'.
 let userNames : string[] = ["Atif", "Ahsan", "Ubaid", "Admin", "Sameer"]

//Loop through the array, and print a greeting to each user:
for (let userName of userNames){
    if (userName === "Admin"){
        console.log("\nHello! admin, would you like to see a status report?")
        }
    else{
            console.log("Hello", userName,"thank you for logging in again")
        }
    }


 //Remove all of the usernames from your array,
 userNames = []

//if the list is empty, print the message We need to find some users!
 if (userNames.length === 0){
    console.log("\nWe need to find some users!")
}
